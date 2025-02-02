import { Injectable } from '@nestjs/common';
import { DrizzleService } from './modules/drizzle/drizzle.service';
import { eq } from 'drizzle-orm';
import { calculateMemeScore, celebrityInvolvementOrder, companyInvolvementOrder, cryptoAdoptionImpactOrder, currentTrendingStatusOrder, findMedian, futureTrendPredictionOrder, historicalSimilarityOrder, hypeFactorOrder, memeTokenPotentialOrder, regulatoryImpactOrder } from './analysis';
import { CryptoNewsAnalysisSchema } from './schemas';
import { SelectAnalysis, SelectNews } from './modules/drizzle/drizzle.types';

type TransformNewsDataRecord = Record<string, SelectNews & { analyses: SelectAnalysis[] }>

function transformNewsData(rawData: { news: SelectNews; analysis: SelectAnalysis }[]) {
  return Object.values(
    rawData.reduce((acc, row) => {
      const { news, analysis } = row;

      if (!acc[news.id]) {
        acc[news.id] = {
          ...news,
          analyses: [],
        };
      }

      if (analysis) {
        acc[news.id].analyses.push(analysis);
      }

      return acc;
    }, {} as TransformNewsDataRecord) // Use object to group by news ID
  );
}


@Injectable()
export class AppService {
  constructor(
    private readonly drizzle: DrizzleService
  ) { }


  health(): string {
    return 'OK';
  }

  async getTransformedClusterNews(id: string) {
    const newsForCluster = await this.getClusterNews(id);

    return transformNewsData(newsForCluster);
  }

  async getClusterTokens(id: string) {
    return this.drizzle.db.select().from(this.drizzle.schema.tokensTable).where(eq(this.drizzle.schema.tokensTable.contentEmbeddingId, id))
  }


  async getClusterNews(contentEmbeddingId: string) {
    const newsForCluster = await this.drizzle.db.select().from(this.drizzle.schema.newsTable).innerJoin(this.drizzle.schema.analysisTable, eq(this.drizzle.schema.newsTable.analysisId, this.drizzle.schema.analysisTable.id)).where(eq(this.drizzle.schema.newsTable.contentEmbeddingId, contentEmbeddingId));

    return newsForCluster;
  }

  async getClusterMedianValues(contentEmbeddingId: string): Promise<CryptoNewsAnalysisSchema> {
    const newsForCluster = await this.getClusterNews(contentEmbeddingId);

    const currentTrendingStatusMedian = findMedian(newsForCluster.map((item) => item.analysis.currentTrendingStatus), currentTrendingStatusOrder);
    const futureTrendPredictionMedian = findMedian(newsForCluster.map((item) => item.analysis.futureTrendPrediction), futureTrendPredictionOrder);
    const celebrityInvolvementMedian = findMedian(newsForCluster.map((item) => item.analysis.celebrityInvolvement), celebrityInvolvementOrder);
    const companyInvolvementMedian = findMedian(newsForCluster.map((item) => item.analysis.companyInvolvement), companyInvolvementOrder);
    const regulatoryImpactMedian = findMedian(newsForCluster.map((item) => item.analysis.regulatoryImpact), regulatoryImpactOrder);
    const historicalSimilarityMedian = findMedian(newsForCluster.map((item) => item.analysis.historicalSimilarity), historicalSimilarityOrder);
    const cryptoAdoptionImpactMedian = findMedian(newsForCluster.map((item) => item.analysis.cryptoAdoptionImpact), cryptoAdoptionImpactOrder);
    const hypeFactorMedian = findMedian(newsForCluster.map((item) => item.analysis.hypeFactor), hypeFactorOrder);
    const memeTokenPotentialMedian = findMedian(newsForCluster.map((item) => item.analysis.memeTokenPotential), memeTokenPotentialOrder);

    return {
      currentTrendingStatus: currentTrendingStatusMedian,
      futureTrendPrediction: futureTrendPredictionMedian,
      celebrityInvolvement: celebrityInvolvementMedian,
      companyInvolvement: companyInvolvementMedian,
      regulatoryImpact: regulatoryImpactMedian,
      historicalSimilarity: historicalSimilarityMedian,
      cryptoAdoptionImpact: cryptoAdoptionImpactMedian,
      hypeFactor: hypeFactorMedian,
      memeTokenPotential: memeTokenPotentialMedian,
    }
  }

  getClusterMedianScore(medianValues: CryptoNewsAnalysisSchema) {
    return calculateMemeScore(medianValues);
  }
}
