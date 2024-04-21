-- CreateTable
CREATE TABLE "Trip" (
    "id" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,
    "tripName" TEXT NOT NULL,
    "startDestination" TEXT NOT NULL,
    "endDestination" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "endDate" TEXT NOT NULL,

    CONSTRAINT "Trip_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Trip" ADD CONSTRAINT "Trip_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "users"("email") ON DELETE CASCADE ON UPDATE CASCADE;
