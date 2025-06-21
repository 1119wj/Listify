import { ValueFormatter } from "@/shared/lib/parser";
import { LandInfo, Listing } from "@prisma/client";
import { listingFormatters } from "./formatters";
import { BasicInfo, RentalPriceInfo, SalePriceInfo } from "./types";

export const basicInfoConfig: ValueFormatter<BasicInfo> = {
  location: { label: "소재지" },
  roadAddress: { label: "도로명 주소" },
  buildingName: { label: "건물명" },
  internalManagementId: {
    label: "자체 관리 번호",
    format: listingFormatters.number,
  },
  currentStatus: { label: "현재 상태" },
  mainCategory: { label: "대분류" },
  subCategory: { label: "소분류" },
  label: { label: "라벨" },
};

export const rentalPriceInfoConfig: ValueFormatter<RentalPriceInfo> = {
  deposit: {
    label: "보증금",
    format: listingFormatters.currency,
  },
  monthlyRent: {
    label: "월 임대료",
    format: listingFormatters.currency,
  },
  fixedMonthlyCost: {
    label: "월 고정비",
    format: listingFormatters.currency,
  },
  maintenanceFee: {
    label: "관리비",
    format: listingFormatters.currency,
  },
  tax: {
    label: "부가세",
    format: listingFormatters.boolean,
  },
};

export const salePriceInfoConfig: ValueFormatter<SalePriceInfo> = {
  purchasePrice: {
    label: "매매가",
    format: listingFormatters.currency,
  },
  depositPrice: {
    label: "입금가",
    format: listingFormatters.currency,
  },

  yield: {
    label: "수익률",
    format: listingFormatters.currency,
  },
  averagePrice: {
    label: "평단가",
    format: listingFormatters.currency,
  },
  securityDeposit: {
    label: "보증금",
    format: listingFormatters.currency,
  },
  monthlyRent: {
    label: "월 임대료",
    format: listingFormatters.currency,
  },
  maintenanceFee: {
    label: "관리비",
    format: listingFormatters.currency,
  },
  maintenanceExpenses: {
    label: "관리비 지출",
    format: listingFormatters.currency,
  },
  otherMaintenanceCosts: {
    label: "기타 관리비",
    format: listingFormatters.currency,
  },
  loanStatus: {
    label: "대출 현황",
  },
};

export const getRentalInfoConfig = (isPyeong: boolean) => {
  return {
    currentFloors: {
      label: "층",
      format: listingFormatters.floor,
    },
    rentalUsage: { label: "용도" },
    rentalArea: {
      label: "임대면적",
      format: (value: number | null | undefined) =>
        listingFormatters.area(value, isPyeong),
    },

    exclusiveArea: {
      label: "전용면적",
      format: (value: number | null | undefined) =>
        listingFormatters.area(value, isPyeong),
    },

    heating: { label: "난방" },
  };
};

export const getBuildingInfoConfig = (isPyeong: boolean) => {
  return {
    totalFloors: {
      label: "총 층수",
      format: listingFormatters.floor,
    },
    currentFloors: {
      label: "현재 층수",
      format: listingFormatters.floor,
    },
    landArea: {
      label: "대지면적",
      format: (value: number | null | undefined) =>
        listingFormatters.area(value, isPyeong),
    },
    totalFloorArea: {
      label: "연면적",
      format: (value: number | null | undefined) =>
        listingFormatters.area(value, isPyeong),
    },
    buildingArea: {
      label: "건축면적",
      format: (value: number | null | undefined) =>
        listingFormatters.area(value, isPyeong),
    },
    grossFloorAreaForFAR: {
      label: "용적률산정 연면적",
      format: (value: number | null | undefined) =>
        listingFormatters.area(value, isPyeong),
    },
    primaryUsage: { label: "주용도" },
    primaryStructure: { label: "주구조" },
    elevator: { label: "엘리베이터" },
    parking: { label: "주차" },
    roadWidth: { label: "도로너비" },
    additionalUsage: { label: "기타용도" },
    buildingHeight: { label: "높이" },
    roofStructure: { label: "지붕구조" },
    numberOfHouseholds: {
      label: "세대/가구수",
      format: listingFormatters.household,
    },
    approvalDate: { label: "허가일" },
    constructionStartDate: { label: "착공일" },
    occupancyApprovalDate: { label: "사용승인일" },
    renovationDate: {
      label: "리모델링일",
      format: (value: Date | null | undefined) =>
        value ? value.toLocaleDateString() : "-",
    },
  };
};

export const getLandInfoConfig = (isPyeong: boolean) => {
  return {
    lotNumber: { label: "동·지번" },
    landAreaSqm: {
      label: "토지 면적",
      format: (value: number | null | undefined) =>
        listingFormatters.area(value, isPyeong),
    },
    appraisedPricePerSqm: {
      label: "개별공시지가",
      format: listingFormatters.currency,
    },
    landCategory: { label: "지목" },
    zoningArea: { label: "용도 지역" },
    usageStatus: { label: "이용 상황" },
    ownershipType: { label: "소유 구분" },
    ownershipChangeDate: { label: "소유권 변동일자" },
    ownershipChangeReason: { label: "소유권 변동 원인" },
    roadContactType: { label: "도로 접면" },
    topography: { label: "지형 높이" },
    landShape: { label: "지형 형상" },
    nationalLandUsePlan: {
      label: "국토의 계획 및 이용에 관한 법률에 따른 토지 이용 계획",
    },
    nationalLandUsePlanStatus: { label: "국토법 적용 여부" },
    otherLandUsePlan: { label: "기타 법률에 따른 토지 이용 계획" },
    otherLandUsePlanStatus: { label: "기타 법률 적용 여부" },
  };
};

export const getRentalItemDetailConfig = (isPyeong: boolean) => {
  return {
    totalFloors: { label: "총 층수", format: listingFormatters.floor },
    currentFloors: { label: "현재 층수", format: listingFormatters.floor },
    rentalArea: {
      label: "임대면적",
      format: (value: number | null | undefined) =>
        listingFormatters.area(value, isPyeong),
    },
    exclusiveArea: {
      label: "전용면적",
      format: (value: number | null | undefined) =>
        listingFormatters.area(value, isPyeong),
    },
    deposit: { label: "보증금", format: listingFormatters.currency },
    monthlyRent: { label: "월 임대료", format: listingFormatters.currency },
    maintenanceFee: { label: "관리비", format: listingFormatters.currency },
  };
};

export const getSaleItemDetailConfig = (isPyeong: boolean) => {
  return {
    totalFloors: { label: "총 층수", format: listingFormatters.floor },
    currentFloors: { label: "현재 층수", format: listingFormatters.floor },
    landArea: {
      label: "대지면적",
      format: (value: number | null | undefined) =>
        listingFormatters.area(value, isPyeong),
    },
    totalFloorArea: {
      label: "연면적",
      format: (value: number | null | undefined) =>
        listingFormatters.area(value, isPyeong),
    },
    averagePrice: { label: "평당가", format: listingFormatters.currency },
    maintenanceFee: { label: "관리비", format: listingFormatters.currency },
    purchasePrice: { label: "매매가", format: listingFormatters.currency },
    yield: { label: "수익률", format: listingFormatters.yield },
  };
};
