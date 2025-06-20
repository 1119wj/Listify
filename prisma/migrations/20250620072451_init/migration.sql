-- CreateEnum
CREATE TYPE "ListingType" AS ENUM ('RENTAL', 'SALE');

-- CreateTable
CREATE TABLE "Agency" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT,
    "tel" TEXT,
    "profileImage" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "agencyId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "listingType" "ListingType" NOT NULL,
    "location" TEXT NOT NULL,
    "roadAddress" TEXT NOT NULL,
    "buildingName" TEXT NOT NULL,
    "internalManagementId" TEXT NOT NULL,
    "currentStatus" TEXT NOT NULL,
    "mainCategory" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "isHidden" BOOLEAN NOT NULL DEFAULT false,
    "photos" TEXT[],
    "totalFloors" INTEGER NOT NULL,
    "currentFloors" TEXT NOT NULL,
    "landArea" DOUBLE PRECISION NOT NULL,
    "totalFloorArea" DOUBLE PRECISION NOT NULL,
    "buildingArea" DOUBLE PRECISION NOT NULL,
    "grossFloorAreaForFAR" DOUBLE PRECISION NOT NULL,
    "primaryUsage" TEXT NOT NULL,
    "primaryStructure" TEXT NOT NULL,
    "elevator" TEXT NOT NULL,
    "parking" TEXT NOT NULL,
    "roadWidth" TEXT NOT NULL,
    "additionalUsage" TEXT,
    "buildingHeight" TEXT NOT NULL,
    "roofStructure" TEXT NOT NULL,
    "numberOfHouseholds" INTEGER NOT NULL,
    "approvalDate" TIMESTAMP(3),
    "constructionStartDate" TIMESTAMP(3),
    "occupancyApprovalDate" TIMESTAMP(3),
    "renovationDate" TIMESTAMP(3),
    "rentalUsage" TEXT,
    "rentalArea" DOUBLE PRECISION,
    "exclusiveArea" DOUBLE PRECISION,
    "heating" TEXT,
    "deposit" BIGINT,
    "monthlyRent" BIGINT,
    "fixedMonthlyCost" BIGINT,
    "maintenanceFeeRental" BIGINT,
    "tax" BOOLEAN,
    "purchasePrice" BIGINT,
    "depositPrice" BIGINT,
    "yield" DOUBLE PRECISION,
    "averagePrice" BIGINT,
    "securityDeposit" BIGINT,
    "monthlyRentSale" BIGINT,
    "maintenanceFeeSale" BIGINT,
    "loanStatus" TEXT,
    "agencyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LandInfo" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "lotNumber" TEXT NOT NULL,
    "landAreaSqm" DOUBLE PRECISION NOT NULL,
    "appraisedPricePerSqm" BIGINT NOT NULL,
    "landCategory" TEXT NOT NULL,
    "zoningArea" TEXT NOT NULL,
    "usageStatus" TEXT NOT NULL,
    "ownershipType" TEXT NOT NULL,
    "ownershipChangeDate" TIMESTAMP(3),
    "ownershipChangeReason" TEXT,
    "roadContactType" TEXT NOT NULL,
    "topography" TEXT NOT NULL,
    "landShape" TEXT NOT NULL,
    "nationalLandUsePlan" TEXT NOT NULL,
    "nationalLandUsePlanStatus" TEXT NOT NULL,
    "otherLandUsePlan" TEXT,
    "otherLandUsePlanStatus" TEXT,

    CONSTRAINT "LandInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "recordType" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "listingId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "LandInfo_listingId_key" ON "LandInfo"("listingId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LandInfo" ADD CONSTRAINT "LandInfo_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
