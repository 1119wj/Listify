import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InfoSection from "./InfoSection";

type InfoCardProps = {
  title: string;
  data: any[];
  cols: 1 | 2 | 3 | 4;
  child?: React.ReactNode;
};

const InfoCard = ({ title, data, cols = 2, child }: InfoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <InfoSection data={data} cols={cols} />
        {child}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
