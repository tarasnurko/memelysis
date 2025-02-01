import { CelebrityInvolvement, CompanyInvolvement, CryptoAdoptionImpact, CurrentTrendingStatus, FutureTrendPrediction, HistoricalSimilarity, HypeFactor, MemeTokenPotential, RegulatoryImpact } from './modules/drizzle/drizzle.types';

import { CryptoNewsAnalysisSchema } from "./schemas";

/*
CurrentTrendingStatus	10%	Higher if viral
FutureTrendPrediction	10%	Likely = higher
CelebrityInvolvement	20%	Yes = more points
CompanyInvolvement	    5%	Large = more points
RegulatoryImpact	    10%	Game-Changing = more
HistoricalSimilarity	5%	Strong similarity = higher
CryptoAdoptionImpact	10%	Huge = big points
HypeFactor	            15%	Extreme = highest
MemeTokenPotential	    15%	Definitely = max
*/

const currentTrendingStatusPoints = {
    [CurrentTrendingStatus.NotTrending]: 0,
    [CurrentTrendingStatus.SlightlyTrending]: 20,
    [CurrentTrendingStatus.Trending]: 60,
    [CurrentTrendingStatus.VeryTrending]: 80,
    [CurrentTrendingStatus.Viral]: 100,
};

const futureTrendPredictionPoints = {
    [FutureTrendPrediction.Unlikely]: 0,
    [FutureTrendPrediction.Possible]: 20,
    [FutureTrendPrediction.Likely]: 70,
    [FutureTrendPrediction.VeryLikely]: 100,
};

const celebrityInvolvementPoints = {
    [CelebrityInvolvement.No]: 0,
    [CelebrityInvolvement.Indirectly]: 30,
    [CelebrityInvolvement.Yes]: 100,
};

const companyInvolvementPoints = {
    [CompanyInvolvement.None]: 20,
    [CompanyInvolvement.Small]: 50,
    [CompanyInvolvement.Medium]: 80,
    [CompanyInvolvement.Large]: 100,
};

const regulatoryImpactPoints = {
    [RegulatoryImpact.NoImpact]: 10,
    [RegulatoryImpact.Small]: 30,
    [RegulatoryImpact.Medium]: 50,
    [RegulatoryImpact.Strong]: 80,
    [RegulatoryImpact.GameChanging]: 100,
};

const historicalSimilarityPoints = {
    [HistoricalSimilarity.None]: 0,
    [HistoricalSimilarity.SimilarWeakImpact]: 10,
    [HistoricalSimilarity.SimilarStrongImpact]: 60,
    [HistoricalSimilarity.SimilarGameChangingImpact]: 100,
};

const cryptoAdoptionImpactPoints = {
    [CryptoAdoptionImpact.NoImpact]: 0,
    [CryptoAdoptionImpact.Small]: 10,
    [CryptoAdoptionImpact.Medium]: 50,
    [CryptoAdoptionImpact.Big]: 90,
    [CryptoAdoptionImpact.Huge]: 100,
};

const hypeFactorPoints = {
    [HypeFactor.None]: 0,
    [HypeFactor.Mild]: 20,
    [HypeFactor.Moderate]: 50,
    [HypeFactor.High]: 80,
    [HypeFactor.Extreme]: 100,
};

const memeTokenPotentialPoints = {
    [MemeTokenPotential.None]: 0,
    [MemeTokenPotential.Slightly]: 30,
    [MemeTokenPotential.Likely]: 70,
    [MemeTokenPotential.Definitely]: 100,
};

export const currentTrendingStatusOrder = [
    CurrentTrendingStatus.NotTrending,
    CurrentTrendingStatus.SlightlyTrending,
    CurrentTrendingStatus.Trending,
    CurrentTrendingStatus.VeryTrending,
    CurrentTrendingStatus.Viral,
];

export const futureTrendPredictionOrder = [
    FutureTrendPrediction.Unlikely,
    FutureTrendPrediction.Possible,
    FutureTrendPrediction.Likely,
    FutureTrendPrediction.VeryLikely,
];

export const celebrityInvolvementOrder = [
    CelebrityInvolvement.No,
    CelebrityInvolvement.Indirectly,
    CelebrityInvolvement.Yes,
];

export const companyInvolvementOrder = [
    CompanyInvolvement.None,
    CompanyInvolvement.Small,
    CompanyInvolvement.Medium,
    CompanyInvolvement.Large,
];

export const regulatoryImpactOrder = [
    RegulatoryImpact.NoImpact,
    RegulatoryImpact.Small,
    RegulatoryImpact.Medium,
    RegulatoryImpact.Strong,
    RegulatoryImpact.GameChanging,
];

export const historicalSimilarityOrder = [
    HistoricalSimilarity.None,
    HistoricalSimilarity.SimilarWeakImpact,
    HistoricalSimilarity.SimilarStrongImpact,
    HistoricalSimilarity.SimilarGameChangingImpact,
];

// Crypto Adoption Impact (Ordered from no impact to huge impact)
export const cryptoAdoptionImpactOrder = [
    CryptoAdoptionImpact.NoImpact,
    CryptoAdoptionImpact.Small,
    CryptoAdoptionImpact.Medium,
    CryptoAdoptionImpact.Big,
    CryptoAdoptionImpact.Huge,
];

// Hype Factor (Ordered from no hype to extreme hype)
export const hypeFactorOrder = [
    HypeFactor.None,
    HypeFactor.Mild,
    HypeFactor.Moderate,
    HypeFactor.High,
    HypeFactor.Extreme,
];

// Meme Token Potential (Ordered from no potential to definitely a meme token)
export const memeTokenPotentialOrder = [
    MemeTokenPotential.None,
    MemeTokenPotential.Slightly,
    MemeTokenPotential.Likely,
    MemeTokenPotential.Definitely,
];


export const findMedian = <T>(values: T[], orderedValues: T[]): T => {
    // Convert enum values to their numeric index based on the orderedValues array
    const numericValues = values
        .map(value => orderedValues.indexOf(value))
        .sort((a, b) => a - b);

    const mid = Math.floor(numericValues.length / 2);

    return orderedValues[numericValues[mid]];
}

export const calculateMemeScore = (analysis: CryptoNewsAnalysisSchema): number => {
    // Weighted sum of scores
    const totalScore =
        currentTrendingStatusPoints[analysis.currentTrendingStatus] * 0.1 +
        futureTrendPredictionPoints[analysis.futureTrendPrediction] * 0.1 +
        celebrityInvolvementPoints[analysis.celebrityInvolvement] * 0.2 +
        companyInvolvementPoints[analysis.companyInvolvement] * 0.05 +
        regulatoryImpactPoints[analysis.regulatoryImpact] * 0.10 +
        historicalSimilarityPoints[analysis.historicalSimilarity] * 0.05 +
        cryptoAdoptionImpactPoints[analysis.cryptoAdoptionImpact] * 0.1 +
        hypeFactorPoints[analysis.hypeFactor] * 0.15 +
        memeTokenPotentialPoints[analysis.memeTokenPotential] * 0.15;

    // Normalize score to be between 0 and 100
    return Math.min(100, Math.max(0, Math.round(totalScore)));
}
