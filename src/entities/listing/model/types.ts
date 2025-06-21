import { Prisma } from "@prisma/client";
import { getAllListings } from "@/shared/lib/data/listings";

// 1. 'Listing' 모델을 조회할 때 어떤 관계(relation)를 포함할지 정의하는 '설계도'를 만듭니다.
//    이 설계도는 실제 DB 쿼리의 include 부분과 내용이 동일해야 합니다.
const listingDetailPayload = Prisma.validator<Prisma.ListingDefaultArgs>()({
  include: {
    user: true,
    comments: true,
    landInfo: true,
  },
});

// 2. Prisma.ListingGetPayload 유틸리티에 위에서 만든 설계도를 전달하여,
//    해당 쿼리의 결과물과 100% 일치하는 타입을 자동으로 생성합니다.
export type ListingDetail = Prisma.ListingGetPayload<
  typeof listingDetailPayload
>;

export type ListingListItem = Prisma.PromiseReturnType<
  typeof getAllListings
>[number];

const basicInfoKeys = [
  "location",
  "roadAddress",
  "buildingName",
  "internalManagementId",
  "currentStatus",
  "mainCategory",
  "subCategory",
  "label",
] as const;

// ✅ Pick 유틸리티를 사용하여 ListingDetailType에서 원하는 키만 골라 BasicInfoType 생성
export type BasicInfo = Pick<ListingDetail, (typeof basicInfoKeys)[number]>;

// BuildingInfo에 해당하는 필드 키 목록
const buildingInfoKeys = [
  "totalFloors",
  "currentFloors",
  "landArea",
  "totalFloorArea",
  "buildingArea",
  "grossFloorAreaForFAR",
  "primaryUsage",
  "primaryStructure",
  "elevator",
  "parking",
  "roadWidth",
  "additionalUsage",
  "buildingHeight",
  "roofStructure",
  "numberOfHouseholds",
  "approvalDate",
  "constructionStartDate",
  "occupancyApprovalDate",
  "renovationDate",
] as const;

// ✅ Pick 유틸리티로 BuildingInfoType 생성
export type BuildingInfo = Pick<
  ListingDetail,
  (typeof buildingInfoKeys)[number]
>;

// ✅ 관계(relation)로 포함된 타입은 더 쉽게 추출할 수 있습니다.
//    NonNullable 유틸리티는 `LandInfo | null` 타입에서 `null`을 제거해줍니다.
export type LandInfo = NonNullable<ListingDetail["landInfo"]>;
export type User = ListingDetail["user"];
export type Comment = ListingDetail["comments"][number];

// ✅ 임대/매매 정보처럼 여러 필드에 흩어져 있는 정보도 Pick으로 묶을 수 있습니다.
const rentalInfoKeys = [
  "rentalUsage",
  "rentalArea",
  "exclusiveArea",
  "heating",
] as const;
export type RentalInfo = Pick<ListingDetail, (typeof rentalInfoKeys)[number]>;

const rentalPriceInfoKeys = [
  "deposit",
  "monthlyRent",
  "fixedMonthlyCost",
  "maintenanceFee",
  "tax",
] as const;
export type RentalPriceInfo = Pick<
  ListingDetail,
  (typeof rentalPriceInfoKeys)[number]
>;

// (매매 정보 타입도 위와 동일한 방식으로 생성)
const salePriceInfoKeys = [
  "purchasePrice",
  "depositPrice",
  "yield",
  "averagePrice",
  "securityDeposit",
  "monthlyRent",
  "maintenanceFee",
  "maintenanceExpenses",
  "otherMaintenanceCosts",
  "loanStatus",
] as const;
export type SalePriceInfo = Pick<
  ListingDetail,
  (typeof salePriceInfoKeys)[number]
>;

const landInfoKeys = [
  "lotNumber",
  "landAreaSqm",
  "landAreaPyeong",
  "appraisedPricePerSqm",
  "appraisedPricePerPyeong",
  "totalAppraisedPrice",
  "landCategory",
  "zoningArea",
  "usageStatus",
  "ownershipType",
  "ownershipChangeDate",
  "ownershipChangeReason",
  "roadContactType",
  "topography",
  "landShape",
  "nationalLandUsePlan",
  "nationalLandUsePlanStatus",
  "otherLandUsePlan",
  "otherLandUsePlanStatus",
] as const;
