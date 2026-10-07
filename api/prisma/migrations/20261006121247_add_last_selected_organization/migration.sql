-- AlterTable
ALTER TABLE "users" ADD COLUMN     "lastSelectedOrganizationId" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_lastSelectedOrganizationId_fkey" FOREIGN KEY ("lastSelectedOrganizationId") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
