import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { NewsAnalysisService } from './news-analysis.service';
import { NewsClient } from './news-client/news.client';
import { OpenAIService } from 'src/openai.service';
import axios from 'axios';
import { DrizzleService } from '../drizzle/drizzle.service';
import { and, eq, inArray, or } from 'drizzle-orm';

@Injectable()
export class NewsAnalysisTaskService {
    constructor(
        protected readonly drizzle: DrizzleService,
        protected readonly openAIService: OpenAIService,
        protected readonly newsAnalysisService: NewsAnalysisService
    ) { }

    run = false;

    @Cron('* * * * * *')
    async updateBbsNewsAnalisys() {
        if (this.run) return;
        this.run = true;

        // const news = await NewsClient.get10LatestBbcFeeds();

        // const lastNews = news[0];

        // const lastNews = {
        // title: 'Barclays customers face second day of issues after IT outage',
        // description: "Online banking, the bank's app and payments in and out of accounts are all affected. ",
        // link: 'https://www.bbc.com/news/articles/cd9qzg92g72o',
        // guid: 'https://www.bbc.com/news/articles/cd9qzg92g72o#0',
        // pubDate: 'Sat, 01 Feb 2025 15:17:05 GMT',
        // 'media:thumbnail': ''
        // }

        const newsData = {
            title: "'A mockery': Trump's new meme-coin sparks anger in crypto world",
            description: "The president's meme-coin launch is being criticised as a stunt, while impatience grows for deregulation.",
            link: 'https://www.bbc.com/news/articles/crlkjejpwr8o',
            guid: 'https://www.bbc.com/news/articles/crlkjejpwr8o#0',
            pubDate: 'Sat, 01 Feb 2025 15:17:05 GMT',
        }

        console.log(newsData);

        const contentText = `${newsData.title}. ${newsData.description}`;

        const embedding = await this.openAIService.createEmbedding(contentText);

        const existingContentEmbeddingEntity = await this.newsAnalysisService.findExistingSimilarContentByEmbedding(embedding);

        // console.log(existingContentEmbedding)

        // if no simmilar news was saved, create new
        if (!existingContentEmbeddingEntity) {
            console.log("new news")
            const newsContent = await NewsClient.getOneBbcNews(newsData.link);

            console.log("analysing...")

            const newsAnalysis = await this.newsAnalysisService.analyseNews(newsData.title, newsData.description, newsContent);

            if (!newsAnalysis) {
                return;
            }

            const contentEmbeddingEntity = await this.newsAnalysisService.createContentEmbedding(newsContent, embedding)

            const analysisEntity = await this.drizzle.db.insert(this.drizzle.schema.analysisTable).values(newsAnalysis).returning();

            await this.drizzle.db.insert(this.drizzle.schema.newsTable).values({
                title: newsData.title,
                excerpt: newsData.description,
                content: newsContent,
                source: "BBC",
                publishedAt: new Date(newsData.pubDate),
                analysisId: analysisEntity[0].id,
                contentEmbeddingId: contentEmbeddingEntity[0].id,
            }).returning()

            const possibleTokens = await this.newsAnalysisService.generateTokensFromNews(newsData.title, newsData.description, newsContent);

            if (!possibleTokens) {
                return;
            }

            // find tokens that connected to current news content and have same names and/or symbols 
            const existingTokenEntities = await this.drizzle.db.select()
                .from(this.drizzle.schema.tokensTable)
                .where(and(eq(this.drizzle.schema.tokensTable.contentEmbeddingId, contentEmbeddingEntity[0].id), or(inArray(this.drizzle.schema.tokensTable.name, possibleTokens.map((tokenData) => tokenData.name)), inArray(this.drizzle.schema.tokensTable.symbol, possibleTokens.map((tokenData) => tokenData.symbol)))));

            const fillteredPossibleTokens = possibleTokens.filter((item) => {
                const tokenWithSameName = existingTokenEntities.find((token) => token.name == item.name);
                const tokenWithSameSymbol = existingTokenEntities.find((token) => token.symbol == item.symbol);

                return !tokenWithSameName && !tokenWithSameSymbol;
            })

            await this.drizzle.db.insert(this.drizzle.schema.tokensTable).values(fillteredPossibleTokens.map((item) => ({ ...item, contentEmbeddingId: contentEmbeddingEntity[0].id }))).returning()
        }



        // console.log(newsAnalysis)


        return;
    }

    // console.log(embedding)

}



