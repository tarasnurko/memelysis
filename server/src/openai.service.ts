import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
    private readonly client: OpenAI;

    constructor(protected readonly config: ConfigService) {
        console.log(this.config.get('OPENAI_API_KEY'));
        this.client = new OpenAI({
            apiKey: this.config.get('OPENAI_API_KEY'),
        });
    }

    async createCompletion(data: OpenAI.Chat.Completions.ChatCompletionCreateParams): Promise<OpenAI.Chat.Completions.ChatCompletion> {
        const res = await this.client.chat.completions.create(data);
        return res as OpenAI.Chat.Completions.ChatCompletion;
    }

    async createEmbedding(value: string): Promise<number[]> {
        const input = value.replaceAll('\n', ' ');

        const res = await this.client.embeddings.create({
            model: "text-embedding-ada-002",
            input,
            encoding_format: "float",
        });

        return res.data?.[0]?.embedding
    }


}