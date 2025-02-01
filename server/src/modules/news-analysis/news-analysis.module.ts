import { Module } from '@nestjs/common';

import { NewsAnalysisService } from './news-analysis.service';
import { NewsAnalysisTaskService } from './news-analysis.task.service';

import { DrizzleModule } from '../drizzle/drizzle.module';
import { OpenAIService } from 'src/openai.service';

@Module({
    imports: [DrizzleModule],
    controllers: [],
    providers: [NewsAnalysisService, NewsAnalysisTaskService, OpenAIService],
})
export class NewsAnalysisModule { }
