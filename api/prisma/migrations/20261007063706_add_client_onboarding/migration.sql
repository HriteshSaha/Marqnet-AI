-- CreateEnum
CREATE TYPE "OnboardingStep" AS ENUM ('BUSINESS_PROFILE', 'GOALS_AND_KPIS', 'CHANNELS', 'AUDIENCE_AND_GEOGRAPHY', 'BUDGET', 'COMPETITORS');

-- CreateEnum
CREATE TYPE "MarketingChannel" AS ENUM ('SEO', 'GOOGLE_ADS', 'META_ADS', 'MICROSOFT_ADS', 'LINKEDIN_ADS', 'TIKTOK_ADS', 'YOUTUBE_ADS', 'EMAIL_MARKETING');

-- CreateEnum
CREATE TYPE "BusinessGoal" AS ENUM ('LEAD_GENERATION', 'ECOMMERCE_SALES', 'BRAND_AWARENESS', 'APP_INSTALLS', 'FOOT_TRAFFIC', 'CUSTOMER_RETENTION');

-- CreateEnum
CREATE TYPE "KpiType" AS ENUM ('CPA', 'ROAS', 'REVENUE', 'LEADS', 'TRAFFIC', 'CONVERSION_RATE', 'BRAND_AWARENESS_LIFT');

-- CreateTable
CREATE TABLE "client_onboarding" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "businessDescription" TEXT,
    "website" TEXT,
    "industry" TEXT,
    "productsServices" TEXT,
    "brandVoice" TEXT,
    "primaryGoal" "BusinessGoal",
    "secondaryGoals" "BusinessGoal"[],
    "primaryKpi" "KpiType",
    "secondaryKpis" "KpiType"[],
    "channels" "MarketingChannel"[],
    "targetGeographies" TEXT[],
    "targetAudience" TEXT,
    "budgetMin" DOUBLE PRECISION,
    "budgetMax" DOUBLE PRECISION,
    "competitors" TEXT[],
    "completedSteps" "OnboardingStep"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "client_onboarding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_onboarding_clientId_key" ON "client_onboarding"("clientId");

-- AddForeignKey
ALTER TABLE "client_onboarding" ADD CONSTRAINT "client_onboarding_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
