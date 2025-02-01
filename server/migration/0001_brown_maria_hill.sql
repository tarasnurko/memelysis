CREATE TYPE "public"."celebrityInvolvementEnum" AS ENUM('No', 'Indirectly', 'Yes');--> statement-breakpoint
CREATE TYPE "public"."companyInvolvementEnum" AS ENUM('None', 'Small', 'Medium', 'Large');--> statement-breakpoint
CREATE TYPE "public"."cryptoAdoptionImpactEnum" AS ENUM('No Impact', 'Small', 'Medium', 'Big', 'Huge');--> statement-breakpoint
CREATE TYPE "public"."currentTrandingStatusEnum" AS ENUM('Not Trending', 'Slightly Trending', 'Trending', 'Very Trending', 'Viral');--> statement-breakpoint
CREATE TYPE "public"."futureTrendPredictionEnum" AS ENUM('Unlikely', 'Possible', 'Likely', 'Very Likely');--> statement-breakpoint
CREATE TYPE "public"."historicalSimilarity" AS ENUM('None', 'Similar but Weak Impact', 'Similar and Strong Impact', 'Similar and Game-Changing Impact');--> statement-breakpoint
CREATE TYPE "public"."hypeFactorEnum" AS ENUM('None', 'Mild', 'Moderate', 'High', 'Extreme');--> statement-breakpoint
CREATE TYPE "public"."memeTokenPotential" AS ENUM('None', 'Slightly', 'Likely', 'Definitely');--> statement-breakpoint
CREATE TYPE "public"."regulatoryImpactEnum" AS ENUM('No Impact', 'Small', 'Medium', 'Strong', 'Game-Changing');--> statement-breakpoint
CREATE TABLE "analysis" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"current_tranding_status" "currentTrandingStatusEnum" NOT NULL,
	"future_trend_prediction" "futureTrendPredictionEnum" NOT NULL,
	"celebrity_involvement" "celebrityInvolvementEnum" NOT NULL,
	"company_involvement" "companyInvolvementEnum" NOT NULL,
	"regulatory_impact" "regulatoryImpactEnum" NOT NULL,
	"historical_similarity" "historicalSimilarity" NOT NULL,
	"crypto_adoption_impact" "cryptoAdoptionImpactEnum" NOT NULL,
	"hype_factor" "hypeFactorEnum" NOT NULL,
	"meme_token_potential" "memeTokenPotential" NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "content_embeddings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"text" text NOT NULL,
	"embedding" vector(1536),
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "news" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"excerpt" text,
	"content" text,
	"source" text NOT NULL,
	"published_at" timestamp NOT NULL,
	"topic_id" uuid,
	"analysis_id" uuid,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tokens" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"news_id" uuid,
	"name" text NOT NULL,
	"symbol" text NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "news" ADD CONSTRAINT "news_topic_id_content_embeddings_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."content_embeddings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "news" ADD CONSTRAINT "news_analysis_id_analysis_id_fk" FOREIGN KEY ("analysis_id") REFERENCES "public"."analysis"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_news_id_content_embeddings_id_fk" FOREIGN KEY ("news_id") REFERENCES "public"."content_embeddings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "embedding_index" ON "content_embeddings" USING hnsw ("embedding" vector_cosine_ops);