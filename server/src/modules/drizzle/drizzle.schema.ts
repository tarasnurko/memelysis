import { pgTable, uuid, text, timestamp, decimal, integer } from "drizzle-orm/pg-core";


const timestamps = {
    updatedAt: timestamp(),
    createdAt: timestamp().defaultNow().notNull(),
}

export const contentEmbeddingsTable = pgTable("topics", {
    id: uuid("id").primaryKey().defaultRandom(),
    text: text("text").notNull(),
    embedding: text("embedding").notNull(),
    ...timestamps
});

export const analysisTable = pgTable("analysis", {
    id: uuid("id").primaryKey().defaultRandom(),
    trendingNow: integer("trending_now").notNull(),
    futureTrend: integer("future_trend").notNull(),
    celebrityInvolvement: integer("celebrity_involvement").notNull(),
    companyInvolvement: integer("company_involvement").notNull(),
    regulatoryImpact: integer("regulatory_impact").notNull(),
    historicalSimilarity: integer("historical_similarity").notNull(),
    cryptoAdoptionImpact: integer("crypto_adoption_impact").notNull(),
    hypeFactor: integer("hype_factor").notNull(),
    memeTokenPotential: integer("meme_token_potential").notNull(),
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
