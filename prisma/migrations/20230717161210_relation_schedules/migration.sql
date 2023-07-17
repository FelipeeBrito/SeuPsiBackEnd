/*
  Warnings:

  - You are about to drop the `costumer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `schedules` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "costumer";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "schedules";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Costumers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "socialName" TEXT NOT NULL,
    "profilePicture" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthdayDate" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "plan" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "professional" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "situation" TEXT NOT NULL,
    "customerId" TEXT,
    CONSTRAINT "Schedules_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Costumers" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
