-- CreateTable
CREATE TABLE "Costumers" (
    "id" TEXT NOT NULL,
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
    "plan" TEXT NOT NULL,

    CONSTRAINT "Costumers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedules" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "professional" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "situation" TEXT NOT NULL,
    "customerId" TEXT,

    CONSTRAINT "Schedules_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Schedules" ADD CONSTRAINT "Schedules_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Costumers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
