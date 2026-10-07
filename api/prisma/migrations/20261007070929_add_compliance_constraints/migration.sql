-- CreateEnum
CREATE TYPE "ComplianceCategory" AS ENUM ('REGULATED_INDUSTRY', 'FINANCIAL_SERVICES', 'HEALTHCARE', 'LEGAL', 'ALCOHOL', 'GAMBLING', 'CANNABIS', 'PROHIBITED_CLAIMS', 'PROHIBITED_KEYWORDS', 'BRAND_RESTRICTION', 'DATA_PRIVACY', 'OTHER');

-- AlterTable
ALTER TABLE "approval_requests" ADD COLUMN     "consumedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "compliance_constraints" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "category" "ComplianceCategory" NOT NULL,
    "description" TEXT NOT NULL,
    "riskLevel" "RiskLevel" NOT NULL,
    "disableAutoExecution" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "version" INTEGER NOT NULL,
    "isCurrent" BOOLEAN NOT NULL DEFAULT true,
    "supersededAt" TIMESTAMP(3),
    "pendingRetirementRequestId" TEXT,
    "createdByUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "compliance_constraints_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "compliance_constraints_clientId_category_isCurrent_idx" ON "compliance_constraints"("clientId", "category", "isCurrent");

-- CreateIndex
CREATE UNIQUE INDEX "compliance_constraints_clientId_category_version_key" ON "compliance_constraints"("clientId", "category", "version");

-- AddForeignKey
ALTER TABLE "compliance_constraints" ADD CONSTRAINT "compliance_constraints_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
