-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" TIMESTAMP(3),
ALTER COLUMN "isActive" SET DEFAULT false,
ALTER COLUMN "hashedPassword" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "User_roleId_idx" ON "User"("roleId");
