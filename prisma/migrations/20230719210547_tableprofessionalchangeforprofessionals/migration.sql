/*
  Warnings:

  - You are about to drop the `Professional` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Socialmedia" DROP CONSTRAINT "Socialmedia_professionalId_fkey";

-- DropTable
DROP TABLE "Professional";

-- CreateTable
CREATE TABLE "Professionals" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "crp" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "avaliation" DOUBLE PRECISION NOT NULL,
    "language" TEXT NOT NULL,
    "skills" TEXT[],
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Professionals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Socialmedia" ADD CONSTRAINT "Socialmedia_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "Professionals"("id") ON DELETE SET NULL ON UPDATE CASCADE;
