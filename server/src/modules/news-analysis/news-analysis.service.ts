import { Injectable } from '@nestjs/common';

import { DrizzleService } from '../drizzle/drizzle.service';
import { OpenAIService } from 'src/openai.service';
import { cosineDistance, desc, gt, sql } from 'drizzle-orm';
import { CelebrityInvolvement, CompanyInvolvement, CryptoAdoptionImpact, CurrentTrendingStatus, FutureTrendPrediction, HistoricalSimilarity, HypeFactor, MemeTokenPotential, RegulatoryImpact, SelectContentEmbeddings } from '../drizzle/drizzle.types';
import { arrayToPromptPoints, enumToArray, parseJsonWithSchema } from 'src/utils';
import { CryptoNewsAnalysisSchema, cryptoNewsAnalysisSchema, TokenMetadataArraySchema, tokenMetadataArraySchema } from '../../schemas';

@Injectable()
export class NewsAnalysisService {
   constructor(
      private readonly drizzle: DrizzleService,
      protected readonly openAIService: OpenAIService,
   ) { }

   async findExistingSimilarContentByEmbedding(embedding: number[]): Promise<SelectContentEmbeddings | undefined> {
      const similarity = sql<number>`1 - (${cosineDistance(this.drizzle.schema.contentEmbeddingsTable.embedding, embedding)})`;

      const similarGuides = await this.drizzle.db
         .select()
         .from(this.drizzle.schema.contentEmbeddingsTable)
         .where(gt(similarity, 0.8))
         .orderBy(desc(similarity))
         .limit(1);

      return similarGuides?.[0];
   }

   async createContentEmbedding(content: string, embedding: number[]) {
      return this.drizzle.db.insert(this.drizzle.schema.contentEmbeddingsTable).values({ text: content, embedding: embedding }).returning();
   }

   async analyseNews(title: string, description: string, content: string): Promise<CryptoNewsAnalysisSchema | null> {
      const prompt = this.newsAnalysisPrompt(title, description, content);
      const analysisString = await this.openAIService.analyzeNewsForCryptoMemePotential(prompt);

      if (!analysisString) {
         return null;
      }

      const { success, data } = parseJsonWithSchema(analysisString, cryptoNewsAnalysisSchema)

      if (!success) {
         return null
      }

      return data;
   }

   async generateTokensFromNews(title: string, description: string, content: string): Promise<TokenMetadataArraySchema | null> {
      const prompt = this.newsTokensPrompt(title, description, content);
      const analysisString = await this.openAIService.analyzeNewsForCryptoMemePotential(prompt);

      if (!analysisString) {
         return null;
      }

      const { success, data } = parseJsonWithSchema(analysisString, tokenMetadataArraySchema)

      if (!success) {
         return null
      }

      return data;
   }

   newsAnalysisPrompt(title: string, description: string, content: string) {
      return `You are an expert AI specializing in analyzing news articles to assess their potential impact on cryptocurrency trends, meme tokens, and public hype. Your task is to critically evaluate news articles based on relevance, influence, and trend potential.
  
  Follow these rules strictly:
  1. **Assess the actual impact on crypto or meme tokens**. If the news has **no direct or indirect connection to crypto**, its impact-related properties should be **"No Impact" or "None".**
  2. **Determine how general audiences react to the news.** Trending news typically involves **major events, social media buzz, regulatory shifts, or celebrity involvement**. If the news is only relevant to a small group (e.g., users of a specific bank), it is **"Not Trending".**
  3. **Use historical knowledge** to evaluate if similar news has **significantly impacted crypto trends** before. If not, set *historicalSimilarity* to **"None".**
  4. **Do not hallucinate connections** to crypto, memes, or trends. If there is no clear reason why the news would be influential, keep its hype factor low.
  
  ---
  ### **News to Analyze**
  - **Title:** ${title}
  - **Description:** ${description}
  - **Content:** ${content}
  
  ---
  ### **Your Task**
  For each of the following categories, **choose the most accurate option** from the provided list based on the above rules.
  
  1. **Current Trending Status** (How much is this news trending globally?)
  ${arrayToPromptPoints(enumToArray(CurrentTrendingStatus))}
  
  2. **Future Trend Prediction** (Will this news trend in the near future?)
  ${arrayToPromptPoints(enumToArray(FutureTrendPrediction))}
  
  3. **Celebrity Involvement** (Does this news involve a famous individual who influences crypto or meme culture?)
  ${arrayToPromptPoints(enumToArray(CelebrityInvolvement))}
  
  4. **Company Involvement** (Does this involve a company, and if so, how influential is the company?)
  ${arrayToPromptPoints(enumToArray(CompanyInvolvement))}
  
  5. **Regulatory Impact** (Will this news affect financial or crypto regulations? If unrelated, select "No Impact.")
  ${arrayToPromptPoints(enumToArray(RegulatoryImpact))}
  
  6. **Historical Similarity** (Have similar news stories in the past caused a crypto or meme trend?)
  ${arrayToPromptPoints(enumToArray(HistoricalSimilarity))}
  
  7. **Crypto Adoption Impact** (Does this news increase interest in crypto adoption? If unrelated, select "No Impact.")
  ${arrayToPromptPoints(enumToArray(CryptoAdoptionImpact))}
  
  8. **Hype Factor** (Does this news generate strong excitement, controversy, or viral social media reactions?)
  ${arrayToPromptPoints(enumToArray(HypeFactor))}
  
  9. **Meme Token Potential** (Is this news likely to inspire a meme token? If there is no clear reason, select "None.")
  ${arrayToPromptPoints(enumToArray(MemeTokenPotential))}
  
  ---
  ### **Output Format**
  Provide the response **strictly** in the following JSON format. **Do not write explanations or anything other than JSON output.**
  
  {
    "currentTrendingStatus": "Not Trending",
    "futureTrendPrediction": "Unlikely",
    "celebrityInvolvement": "No",
    "companyInvolvement": "Large",
    "regulatoryImpact": "No Impact",
    "historicalSimilarity": "None",
    "cryptoAdoptionImpact": "No Impact",
    "hypeFactor": "None",
    "memeTokenPotential": "None"
  }
  `
   }

   newsTokensPrompt(title: string, description: string, content: string) {
      return `You are an expert AI specializing in generating creative and relevant cryptocurrency token names based on news articles. 
     
     ### **Instructions:**
      - Your task is to generate **unique, creative, and meme-worthy** cryptocurrency token names and symbols based on the given news.
      - The names should reflect the **key themes, sentiment, and viral potential** of the news.
      - Symbols should be **short (3-5 uppercase letters)** and easy to recognize in the crypto market.
      - **If the news has no meme or crypto relevance, return an empty array []**.
      - **If the news has minor meme potential, generate 1-2 token names**.
      - **If the news is viral, highly memeable, or directly related to crypto, generate up to 10 token names**.
      - **Do not create generic tokens** unrelated to the actual content.
      - Ensure the output is **strictly in valid JSON format**.
     
     ---
     ### **News to Analyze**
     - **Title:** ${title}
     - **Description:** ${description}
     - **Content:** ${content}
     
     ---
     ### **Response Format**
     Your response **must be strictly in valid JSON** format, containing an **array of token objects**. Each object should have:
     - **name** (string) → The full token name
     - **symbol** (string) → The short token symbol
     
     Example output format (output below is multiple viral tokens from multiple news):
     \`\`\`json
     [
       { "name": "PEPE", "symbol": "PEPE" },
       { "name": "Goatseus Maximus", "symbol": "GOAT" },
       { "name": "Elon for AfD", "symbol": "Elon4AfD" },
       { "name": "Vine Coin", "symbol": "VINE" },
       { "name": "Moo Deng", "symbol": "MOODENG" },
       { "name": "Believe In Somethingg", "symbol": "BIS" },
     ]
     \`\`\`
     
     Now, **generate the best possible token names** based on the given news.
     `
   }

}
