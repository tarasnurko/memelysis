import { Injectable } from '@nestjs/common';
import { DrizzleService } from './modules/drizzle/drizzle.service';
import { eq } from 'drizzle-orm';
import { calculateMemeScore, celebrityInvolvementOrder, companyInvolvementOrder, cryptoAdoptionImpactOrder, currentTrendingStatusOrder, findMedian, futureTrendPredictionOrder, historicalSimilarityOrder, hypeFactorOrder, memeTokenPotentialOrder, regulatoryImpactOrder } from './analysis';
import { CryptoNewsAnalysisSchema } from './schemas';

@Injectable()
export class AppService {
  constructor(
    private readonly drizzle: DrizzleService
  ) { }


  health(): string {
    return 'OK';
  }

  async getClusterMedianValues(contentEmbeddingId: string): Promise<CryptoNewsAnalysisSchema> {
    const newsForCluster = await this.drizzle.db.select().from(this.drizzle.schema.newsTable).innerJoin(this.drizzle.schema.analysisTable, eq(this.drizzle.schema.newsTable.analysisId, this.drizzle.schema.analysisTable.id)).where(eq(this.drizzle.schema.newsTable.contentEmbeddingId, contentEmbeddingId));

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
