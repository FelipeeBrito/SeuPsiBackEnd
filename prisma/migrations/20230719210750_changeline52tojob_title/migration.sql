/*
  Warnings:

  - You are about to drop the column `profession` on the `Professionals` table. All the data in the column will be lost.
  - Added the required column `jobTitle` to the `Professionals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Professionals" DROP COLUMN "profession",
ADD COLUMN     "jobTitle" TEXT NOT NULL;
