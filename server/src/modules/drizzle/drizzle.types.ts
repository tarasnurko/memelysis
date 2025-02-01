import * as schema from './drizzle.schema';

// export type SelectEvmWallet = typeof schema.evmWallets.$inferSelect;
// export type SelectActionSettings = typeof schema.actionsSettings.$inferSelect;

// export type InsertActionSettings = typeof schema.actionsSettings.$inferInsert;

// export type TableNames = Exclude<keyof typeof schema, 'actionTypeEnum'>;

// export type DrizzleServiceValidateEntitiesExist = {
//     table: TableNames;
//     entityId: number;
// }[];

export enum CurrentTrendingStatus {
    NotTrending = "Not Trending",
    SlightlyTrending = "Slightly Trending",
    Trending = "Trending",
    VeryTrending = "Very Trending",
    Viral = "Viral",
}

export enum FutureTrendPrediction {
    Unlikely = "Unlikely",
    Possible = "Possible",
    Likely = "Likely",
    VeryLikely = "Very Likely",
}

export enum CelebrityInvolvement {
    No = "No",
    Indirectly = "Indirectly",
    Yes = "Yes",
}

export enum CompanyInvolvement {
    None = "None",
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
}

export enum RegulatoryImpact {
    NoImpact = "No Impact",
    Small = "Small",
    Medium = "Medium",
    Strong = "Strong",
    GameChanging = "Game-Changing",
}

export enum HistoricalSimilarity {
    None = "None",
    SimilarWeakImpact = "Similar but Weak Impact",
    SimilarStrongImpact = "Similar and Strong Impact",
    SimilarGameChangingImpact = "Similar and Game-Changing Impact",
}

export enum CryptoAdoptionImpact {
    NoImpact = "No Impact",
    Small = "Small",
    Medium = "Medium",
    Big = "Big",
    Huge = "Huge",
}

export enum HypeFactor {
    None = "None",
    Mild = "Mild",
    Moderate = "Moderate",
    High = "High",
    Extreme = "Extreme",
}

export enum MemeTokenPotential {
    None = "None",
    Slightly = "Slightly",
    Likely = "Likely",
    Definitely = "Definitely",
}

