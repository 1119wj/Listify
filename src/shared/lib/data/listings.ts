import { prisma } from "@/shared/lib/prisma";

//todo 매매, 임대 아이템필드 추가 및 페이지네이션 추가
export async function getAllListings() {
  console.log("Fetching all listings from DB...");
  const listings = await prisma.listing.findMany({
    select: {
      id: true,
      buildingName: true,
      location: true,
      listingType: true,
      deposit: true,
      monthlyRent: true,
      purchasePrice: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return listings;
}

// 매물 상세 정보 조회
export async function getListingById(id: string) {
  console.log(`Fetching listing with id: ${id}`);
  const listing = await prisma.listing.findUnique({
    where: { id },
    include: {
      user: true, // 담당자 정보 포함
      comments: true, // 코멘트 포함
      landInfo: true, // 토지 정보 포함 (매매 매물일 경우)
    },
  });
  return listing;
}
