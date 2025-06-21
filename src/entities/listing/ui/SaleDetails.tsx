import { TabsContent } from "@/components/ui/tabs";
import { BaseContentType } from "@/shared/lib/parser";
import InfoCard from "@/shared/ui/InfoCard";

type SaleDetailsProps = {
  salePriceInfo: BaseContentType[];
};

const SaleDetails = ({ salePriceInfo }: SaleDetailsProps) => {
  return (
    <div className="space-y-4">
      <TabsContent value="price">
        <InfoCard title="가격 정보" data={salePriceInfo} cols={2} />
      </TabsContent>
    </div>
  );
};

export default SaleDetails;
