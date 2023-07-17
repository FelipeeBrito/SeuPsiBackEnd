-- CreateTable
CREATE TABLE "Professional" (
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

    CONSTRAINT "Professional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Socialmedia" (
    "id" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "linkedIn" TEXT NOT NULL,
    "professionalId" TEXT,

    CONSTRAINT "Socialmedia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Socialmedia" ADD CONSTRAINT "Socialmedia_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "Professional"("id") ON DELETE SET NULL ON UPDATE CASCADE;
