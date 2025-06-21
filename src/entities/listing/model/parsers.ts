import { createParser } from "@/shared/lib/parser";
import {
  basicInfoConfig,
  getLandInfoConfig,
  getRentalInfoConfig,
  getBuildingInfoConfig,
  rentalPriceInfoConfig,
  salePriceInfoConfig,
  getRentalItemDetailConfig,
  getSaleItemDetailConfig,
} from "./configs";
import { LandInfo, Listing } from "@prisma/client";
import {
  BasicInfo,
  BuildingInfo,
  RentalInfo,
  RentalPriceInfo,
  SalePriceInfo,
} from "./types";

export const parseBasicInfo = (listing: BasicInfo) =>
  createParser(basicInfoConfig)(listing);

export const parseBuildingInfo = (listing: BuildingInfo, isPyeong: boolean) => {
  return createParser(getBuildingInfoConfig(isPyeong))(listing);
};

export const parseRentalInfo = (listing: RentalInfo, isPyeong: boolean) => {
  return createParser(getRentalInfoConfig(isPyeong))(listing);
};

export const parseRentalPriceInfo = (listing: RentalPriceInfo) =>
  createParser(rentalPriceInfoConfig)(listing);
export const parseSalePriceInfo = (listing: SalePriceInfo) =>
  createParser(salePriceInfoConfig)(listing);

export const parseLandInfo = (listing: LandInfo, isPyeong: boolean) => {
  return createParser(getLandInfoConfig(isPyeong))(listing);
};

export const parseRentalItemDetail = (
  listing: Partial<Listing>,
  isPyeong: boolean
) => {
  return createParser(getRentalItemDetailConfig(isPyeong))(listing);
};
export const parseSaleItemDetail = (
  listing: Partial<Listing>,
  isPyeong: boolean
) => {
  return createParser(getSaleItemDetailConfig(isPyeong))(listing);
};
