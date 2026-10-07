-- CreateEnum
CREATE TYPE "ClientAccessScope" AS ENUM ('ALL', 'RESTRICTED');

-- AlterTable
ALTER TABLE "memberships" ADD COLUMN     "clientAccessScope" "ClientAccessScope" NOT NULL DEFAULT 'ALL';

-- CreateTable
CREATE TABLE "membership_client_access" (
    "id" TEXT NOT NULL,
    "membershipId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "membership_client_access_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "membership_client_access_membershipId_idx" ON "membership_client_access"("membershipId");

-- CreateIndex
CREATE UNIQUE INDEX "membership_client_access_membershipId_clientId_key" ON "membership_client_access"("membershipId", "clientId");

-- AddForeignKey
ALTER TABLE "membership_client_access" ADD CONSTRAINT "membership_client_access_membershipId_fkey" FOREIGN KEY ("membershipId") REFERENCES "memberships"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "membership_client_access" ADD CONSTRAINT "membership_client_access_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE CASCADE;
