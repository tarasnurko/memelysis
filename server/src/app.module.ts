import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DrizzleModule } from './modules/drizzle/drizzle.module';
import { NewsAnalysisModule } from './modules/news-analysis/news-analysis.module';
import { OpenAIService } from './openai.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    DrizzleModule,
    NewsAnalysisModule
  ],
  controllers: [AppController],
  providers: [AppService, OpenAIService],
})
export class AppModule { }
