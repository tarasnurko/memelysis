import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { NewsAnalysisService } from './news-analysis.service';
import { NewsClient } from './news-client/news.client';
import { OpenAIService } from 'src/openai.service';
import { DrizzleService } from '../drizzle/drizzle.service';
import { and, eq, inArray, or } from 'drizzle-orm';
import { lower } from '../drizzle/drizzle.helpers';

@Injectable()
export class NewsAnalysisTaskService {
    constructor(
        protected readonly drizzle: DrizzleService,
        protected readonly openAIService: OpenAIService,
        protected readonly newsAnalysisService: NewsAnalysisService
    ) { }

    run = false;
    // run = true;

    // TODO: change to every few minutes
    @Cron('* * * * * *') // every second
    async updateBbsNewsAnalisys() {
        const source = "BBC";

        if (this.run) return;
        this.run = true;

        const news = await NewsClient.get10LatestBbcFeeds();

        console.log("Start processing news...")

        // filter news that are not already in db
        // find news that already have same title/description from one source (BBC)
        const existingNewsEntities = await this.drizzle.db.select()
            .from(this.drizzle.schema.newsTable)
            .where(and(eq(this.drizzle.schema.newsTable.source, source), or(inArray(lower(this.drizzle.schema.newsTable.title), news.map((newsData) => newsData.title?.toLowerCase())), inArray(lower(this.drizzle.schema.newsTable.excerpt), news.map((newsData) => newsData.description?.toLowerCase())))));

        // remove those tokens that already exist
        const fillteredNews = news.filter((item) => {
            const existingNewsWithSameTitle = existingNewsEntities.find((newsData) => newsData.title.toLowerCase() == item.title.toLowerCase());
            const existingNewsWithSameDescription = existingNewsEntities.find((newsData) => newsData.excerpt?.toLowerCase() == item.description.toLowerCase());

            return !existingNewsWithSameTitle && !existingNewsWithSameDescription;
        })


        for (const newsItem of fillteredNews) {
            const newsTextForEmbedding = `${newsItem.title}. ${newsItem.description}`;

            const embedding = await this.openAIService.createEmbedding(newsTextForEmbedding);

            let contentEmbeddingEntity = await this.newsAnalysisService.findExistingSimilarContentByEmbedding(embedding);

            // if no simmilar news was saved, create new
            if (!contentEmbeddingEntity) {
                contentEmbeddingEntity = (await this.newsAnalysisService.createContentEmbedding(newsTextForEmbedding, embedding))[0]
            }

            const newsContent = await NewsClient.getOneBbcNews(newsItem.link);

            const newsAnalysis = await this.newsAnalysisService.analyseNews(newsItem.title, newsItem.description, newsContent);

            if (!newsAnalysis) {
                console.log("Failed to parse news analysis")
                continue;
            }

            const analysisEntity = await this.drizzle.db.insert(this.drizzle.schema.analysisTable).values(newsAnalysis).returning();

            await this.drizzle.db.insert(this.drizzle.schema.newsTable).values({
                title: newsItem.title,
                excerpt: newsItem.description,
                content: newsContent,
                source,
                publishedAt: new Date(newsItem.pubDate),
                analysisId: analysisEntity[0].id,
                contentEmbeddingId: contentEmbeddingEntity.id,
            })

            const possibleTokens = await this.newsAnalysisService.generateTokensFromNews(newsItem.title, newsItem.description, newsContent);

            if (!possibleTokens || !possibleTokens.length) {
                console.log("Failed to parse possible tokens")
                continue;
            }

            // find tokens that connected to current news content and have same names and/or symbols 
            const existingTokenEntities = await this.drizzle.db.select()
                .from(this.drizzle.schema.tokensTable)
                .where(and(eq(this.drizzle.schema.tokensTable.contentEmbeddingId, contentEmbeddingEntity.id), or(inArray(lower(this.drizzle.schema.tokensTable.name), possibleTokens.map((tokenData) => tokenData.name?.toLowerCase())), inArray(lower(this.drizzle.schema.tokensTable.symbol), possibleTokens.map((tokenData) => tokenData.symbol?.toLowerCase())))));

            // remove those tokens that already exist
            const fillteredPossibleTokens = possibleTokens.filter((item) => {
                const tokenWithSameName = existingTokenEntities.find((token) => token.name.toLowerCase() == item.name.toLowerCase());
                const tokenWithSameSymbol = existingTokenEntities.find((token) => token.symbol.toLowerCase() == item.symbol.toLowerCase());

                return !tokenWithSameName && !tokenWithSameSymbol;
            })

            await this.drizzle.db.insert(this.drizzle.schema.tokensTable).values(fillteredPossibleTokens.map((item) => ({ name: item.name, symbol: item.symbol.toUpperCase(), contentEmbeddingId: contentEmbeddingEntity.id })))
        }

        console.log("All news were processed")
    }
}



