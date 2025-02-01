import { pgTable, uuid, text, timestamp, pgEnum } from "drizzle-orm/pg-core";
import { enumToPgEnum } from "./drizzle.helpers";
import { CelebrityInvolvement, CompanyInvolvement, CryptoAdoptionImpact, CurrentTrendingStatus, FutureTrendPrediction, HistoricalSimilarity, HypeFactor, MemeTokenPotential, RegulatoryImpact } from "./drizzle.types";

const timestamps = {
    updatedAt: timestamp(),
    createdAt: timestamp().defaultNow().notNull(),
}

export const currentTrandingStatusEnum = pgEnum('currentTrandingStatusEnum', enumToPgEnum(CurrentTrendingStatus));
export const futureTrendPredictionEnum = pgEnum('futureTrendPredictionEnum', enumToPgEnum(FutureTrendPrediction));
export const celebrityInvolvementEnum = pgEnum('celebrityInvolvementEnum', enumToPgEnum(CelebrityInvolvement));
export const companyInvolvementEnum = pgEnum('companyInvolvementEnum', enumToPgEnum(CompanyInvolvement));
export const regulatoryImpactEnum = pgEnum('regulatoryImpactEnum', enumToPgEnum(RegulatoryImpact));
export const historicalSimilarity = pgEnum('historicalSimilarity', enumToPgEnum(HistoricalSimilarity));
export const cryptoAdoptionImpactEnum = pgEnum('cryptoAdoptionImpactEnum', enumToPgEnum(CryptoAdoptionImpact));
export const hypeFactorEnum = pgEnum('hypeFactorEnum', enumToPgEnum(HypeFactor));
export const memeTokenPotential = pgEnum('memeTokenPotential', enumToPgEnum(MemeTokenPotential));


export const contentEmbeddingsTable = pgTable("topics", {
    id: uuid("id").primaryKey().defaultRandom(),
    text: text("text").notNull(),
    embedding: text("embedding").notNull(),
    ...timestamps
});

export const analysisTable = pgTable("analysis", {
    id: uuid("id").primaryKey().defaultRandom(),
    currentTrandingStatus: currentTrandingStatusEnum("current_tranding_status").notNull(),
    futureTrendPrediction: futureTrendPredictionEnum("future_trend_prediction").notNull(),
    celebrityInvolvement: celebrityInvolvementEnum("celebrity_involvement").notNull(),
    companyInvolvement: companyInvolvementEnum("company_involvement").notNull(),
    regulatoryImpact: regulatoryImpactEnum("regulatory_impact").notNull(),
    historicalSimilarity: historicalSimilarity("historical_similarity").notNull(),
    cryptoAdoptionImpact: cryptoAdoptionImpactEnum("crypto_adoption_impact").notNull(),
    hypeFactor: hypeFactorEnum("hype_factor").notNull(),
    memeTokenPotential: memeTokenPotential("meme_token_potential").notNull(),
    ...timestamps
});

export const newsTable = pgTable("news", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: text("title").notNull(),
    excerpt: text("excerpt"),
    content: text("content"),
    source: text("source").notNull(),
    publishedAt: timestamp("published_at").notNull(),
    contentEmbeddingId: uuid("topic_id").references(() => contentEmbeddingsTable.id, { onDelete: "cascade" }),
    analysisId: uuid("analysis_id").references(() => analysisTable.id, { onDelete: "cascade" }),
    ...timestamps
});

export const tokensTable = pgTable("tokens", {
    id: uuid("id").primaryKey().defaultRandom(),
    contentEmbeddingId: uuid("news_id").references(() => contentEmbeddingsTable.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    symbol: text("symbol").notNull(),
    ...timestamps
});
