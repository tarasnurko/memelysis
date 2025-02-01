import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { NewsAnalysisService } from './news-analysis.service';
import { NewsClient } from './news-client/news.client';
import { OpenAIService } from 'src/openai.service';

@Injectable()
export class NewsAnalysisTaskService {
    constructor(
        protected readonly openAIService: OpenAIService,
        protected readonly newsAnalysisService: NewsAnalysisService
    ) { }

    run = false;

    @Cron('* * * * * *')
    async updateBbsNewsAnalisys() {
        if (this.run) return;
        this.run = true;

        const news = await NewsClient.get10LatestBbcFeeds();

        const lastNews = news[0];

        console.log(lastNews);

        const embedding = await this.openAIService.createEmbedding(`${lastNews.title}. ${lastNews.description}`);

        console.log(embedding)

    }

}



