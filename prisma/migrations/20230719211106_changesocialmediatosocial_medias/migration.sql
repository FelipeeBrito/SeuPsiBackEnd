/*
  Warnings:

  - You are about to drop the `Socialmedia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Socialmedia" DROP CONSTRAINT "Socialmedia_professionalId_fkey";

-- DropTable
DROP TABLE "Socialmedia";

-- CreateTable
CREATE TABLE "SocialMedias" (
    "id" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "linkedIn" TEXT NOT NULL,
    "professionalId" TEXT,

    CONSTRAINT "SocialMedias_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SocialMedias" ADD CONSTRAINT "SocialMedias_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "Professionals"("id") ON DELETE SET NULL ON UPDATE CASCADE;
