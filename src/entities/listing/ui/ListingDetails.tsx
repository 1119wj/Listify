import type { Listing } from "@prisma/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  parseBasicInfo,
  parseBuildingInfo,
  parseRentalInfo,
  parseRentalPriceInfo,
  parseSalePriceInfo,
} from "../model/parsers";
import InfoCard from "@/shared/ui/InfoCard";
import ListingImageGallery from "./ListingImageGallery";
import RentalDetails from "./RentalDetails";
import SaleDetails from "./SaleDetails";

type ListingDetailsProps = {
  listing: Listing & { landInfo?: any /* ... 타입 확장 */ };
  isPyeong: boolean;
};

export const ListingDetails = ({ listing, isPyeong }: ListingDetailsProps) => {
  const basicInfoData = parseBasicInfo(listing);
  const buildingInfoData = parseBuildingInfo(listing, isPyeong);
  const rentalInfoData = parseRentalInfo(listing, isPyeong);
  const rentalPriceInfoData = parseRentalPriceInfo(listing);
  const salePriceInfoData = parseSalePriceInfo(listing);

  return (
    <div className="space-y-6">
      <ListingImageGallery photos={listing.photos} />

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="w-full">
          <TabsTrigger value="basic">기본 정보</TabsTrigger>
          <TabsTrigger value="price">금액 정보</TabsTrigger>
          {listing.listingType === "RENTAL" && (
            <TabsTrigger value="rental">임대 정보</TabsTrigger>
          )}
          <TabsTrigger value="building">건물 정보</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <InfoCard title="기본 정보" data={basicInfoData} cols={2} />
        </TabsContent>

        {listing.listingType === "RENTAL" ? (
          <RentalDetails
            rentalInfo={rentalInfoData}
            rentalPriceInfo={rentalPriceInfoData}
          />
        ) : (
          <SaleDetails salePriceInfo={salePriceInfoData} />
        )}

        <TabsContent value="building">
          <InfoCard title="건물 정보" data={buildingInfoData} cols={2} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ListingDetails;
