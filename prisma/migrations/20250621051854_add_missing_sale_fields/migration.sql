/*
  Warnings:

  - You are about to drop the column `maintenanceFeeRental` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `maintenanceFeeSale` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `monthlyRentSale` on the `Listing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "maintenanceFeeRental",
DROP COLUMN "maintenanceFeeSale",
DROP COLUMN "monthlyRentSale",
ADD COLUMN     "maintenanceExpenses" BIGINT,
ADD COLUMN     "maintenanceFee" BIGINT,
ADD COLUMN     "otherMaintenanceCosts" BIGINT;
