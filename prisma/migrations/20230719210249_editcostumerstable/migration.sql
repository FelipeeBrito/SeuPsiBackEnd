/*
  Warnings:

  - You are about to drop the `Costumer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Schedules" DROP CONSTRAINT "Schedules_customerId_fkey";

-- DropTable
DROP TABLE "Costumer";

-- CreateTable
CREATE TABLE "Costumers" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "socialName" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdayDate" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "plan" TEXT NOT NULL,

    CONSTRAINT "Costumers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Costumers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
