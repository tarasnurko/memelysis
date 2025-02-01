import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
    private readonly client: OpenAI;

    constructor(protected readonly config: ConfigService) {
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

    async analyzeNewsForCryptoMemePotential(prompt: string): Promise<string | null> {
        const systemPrompt = `You are a highly skilled expert with deep knowledge and expertise in cryptocurrency trends, meme tokens, celebrity involvement in crypto, market analysis, hype factors, and news impact. You have been trained to assess news articles and predict their impact on the crypto space, especially meme tokens. Your analysis should be authoritative, precise, and based on solid reasoning, with a focus on potential market shifts, future trends, and crypto adoption. Your task is to critically evaluate news articles based on relevance, influence, and trend potential.`;

        const completion = await this.client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: prompt }],
        });

        return completion.choices[0].message.content;
    }

}