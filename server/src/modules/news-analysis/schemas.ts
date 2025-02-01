import { z } from 'zod';
import { CelebrityInvolvement, CompanyInvolvement, CryptoAdoptionImpact, CurrentTrendingStatus, FutureTrendPrediction, HistoricalSimilarity, HypeFactor, MemeTokenPotential, RegulatoryImpact } from '../drizzle/drizzle.types';

export const cryptoNewsAnalysisSchema = z.object({
    currentTrendingStatus: z.nativeEnum(CurrentTrendingStatus),
    futureTrendPrediction: z.nativeEnum(FutureTrendPrediction),
    celebrityInvolvement: z.nativeEnum(CelebrityInvolvement),
    companyInvolvement: z.nativeEnum(CompanyInvolvement),
    regulatoryImpact: z.nativeEnum(RegulatoryImpact),
    historicalSimilarity: z.nativeEnum(HistoricalSimilarity),
    cryptoAdoptionImpact: z.nativeEnum(CryptoAdoptionImpact),
    hypeFactor: z.nativeEnum(HypeFactor),
    memeTokenPotential: z.nativeEnum(MemeTokenPotential),
});

export const tokenMetadataSchema = z.object({
    name: z.string(),
    symbol: z.string()
})

export const tokenMetadataArraySchema = z.array(tokenMetadataSchema)


export type CryptoNewsAnalysisSchema = z.infer<typeof cryptoNewsAnalysisSchema>;

export type TokenMetadataArraySchema = z.infer<typeof tokenMetadataArraySchema>;