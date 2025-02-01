import { Injectable } from '@nestjs/common';

import { DrizzleService } from '../drizzle/drizzle.service';
import { OpenAIService } from 'src/openai.service';
import { cosineDistance, desc, gt, sql } from 'drizzle-orm';

@Injectable()
export class NewsAnalysisService {
    constructor(
        private readonly drizzle: DrizzleService,
        protected readonly openAIService: OpenAIService,
    ) { }

    async findExistingSimilarContentsByEmbedding(content: string) {
        const newContentEmbedding = await this.openAIService.createEmbedding(content);

        const similarity = sql<number>`1 - (${cosineDistance(this.drizzle.schema.contentEmbeddingsTable.embedding, newContentEmbedding)})`;


        const similarGuides = await this.drizzle.db
            .select()
            .from(this.drizzle.schema.contentEmbeddingsTable)
            .where(gt(similarity, 0.8))
            .orderBy((t) => desc(t.embedding))
            .limit(3);
        return similarGuides;
    }

    async updateBbsNewsAnalisys() {

    }
}
