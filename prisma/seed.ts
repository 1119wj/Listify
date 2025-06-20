import { PrismaClient, PropertyType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Start seeding...");

  const agency = await prisma.agency.create({
    data: {
      name: "Vercel 부동산",
    },
  });
  console.log(`🏢 Created agency: ${agency.name}`);

  const user = await prisma.user.create({
    data: {
      email: "johndoe@example.com",
      name: "홍길동",
      agencyId: agency.id,
    },
  });
  console.log(`👤 Created user: ${user.name}`);

  await prisma.listing.create({
    data: {
      // BasicInfo
      location: "서울시 강남구 역삼동",
      roadAddress: "테헤란로 123",
      buildingName: "강남파이낸스센터",
      buildingHeight: "80m",
      roofStructure: "평지붕",
      internalManagementId: "A-001",
      currentStatus: "공실",
      mainCategory: "업무시설",
      subCategory: "사무실",
      label: "초역세권",
      // Base
      isHidden: false,
      photos: ["/sample1.jpg", "/sample2.jpg"],
      propertyType: PropertyType.RENTAL,
      // BuildingInfo
      totalFloors: 20,
      currentFloors: "15",
      landArea: 5000,
      totalFloorArea: 80000,
      buildingArea: 3000,
      grossFloorAreaForFAR: 75000,
      primaryUsage: "업무시설",
      primaryStructure: "철근콘크리트",
      elevator: "있음 (10대)",
      parking: "가능 (500대)",
      roadWidth: "50m",
      numberOfHouseholds: 100,
      // Rental Info
      rentalUsage: "사무실",
      rentalArea: 150.5,
      exclusiveArea: 100.2,
      heating: "중앙냉난방",
      deposit: 100000000, // 1억
      monthlyRent: 8000000, // 800만
      maintenanceFeeRental: 1500000, // 150만
      tax: true,
      // 관계 설정
      agencyId: agency.id,
      userId: user.id,
    },
  });
  console.log("🏡 Created a RENTAL listing: 강남파이낸스센터");

  console.log("✅ Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
