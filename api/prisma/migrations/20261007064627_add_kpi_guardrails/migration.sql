-- CreateEnum
CREATE TYPE "GuardrailMetric" AS ENUM ('CPA', 'ROAS', 'REVENUE', 'BUDGET', 'LEAD_QUALITY_SCORE');

-- CreateTable
CREATE TABLE "kpi_guardrails" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "metric" "GuardrailMetric" NOT NULL,
    "targetValue" DOUBLE PRECISION NOT NULL,
    "acceptableMin" DOUBLE PRECISION NOT NULL,
    "acceptableMax" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "version" INTEGER NOT NULL,
    "isCurrent" BOOLEAN NOT NULL DEFAULT true,
    "supersededAt" TIMESTAMP(3),
    "createdByUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "kpi_guardrails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "kpi_guardrails_clientId_metric_isCurrent_idx" ON "kpi_guardrails"("clientId", "metric", "isCurrent");

-- CreateIndex
CREATE UNIQUE INDEX "kpi_guardrails_clientId_metric_version_key" ON "kpi_guardrails"("clientId", "metric", "version");

-- AddForeignKey
ALTER TABLE "kpi_guardrails" ADD CONSTRAINT "kpi_guardrails_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
