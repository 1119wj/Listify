import { BaseContentType } from "@/shared/lib/parser";
import InfoCard from "@/shared/ui/InfoCard";
import { TabsContent } from "@/components/ui/tabs";

type RentalDetailsProps = {
  rentalInfo: BaseContentType[];
  rentalPriceInfo: BaseContentType[];
};

const RentalDetails = ({ rentalInfo, rentalPriceInfo }: RentalDetailsProps) => {
  return (
    <div className="space-y-4">
      <TabsContent value="price">
        <InfoCard title="가격 정보" data={rentalPriceInfo} cols={2} />
      </TabsContent>
      <TabsContent value="rental">
        <InfoCard title="임대 정보" data={rentalInfo} cols={2} />
      </TabsContent>
    </div>
  );
};

export default RentalDetails;
