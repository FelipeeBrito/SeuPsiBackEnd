-- CreateTable
CREATE TABLE "Plans" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "benefits" TEXT[],
    "buttonTitle" TEXT NOT NULL,
    "headerTapeColor" TEXT NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Plans_pkey" PRIMARY KEY ("id")
);
