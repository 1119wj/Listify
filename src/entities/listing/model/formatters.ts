import { genericFormatters } from "@/shared/lib/formatters";

export const listingFormatters = {
  ...genericFormatters,
  currency: (value: number | bigint | null | undefined) =>
    value != null ? `${Number(value).toLocaleString()}만 원` : "-",
  area: (value: number | null | undefined, isPyeong: boolean) =>
    value != null ? `${value}${isPyeong ? "평" : "㎡"}` : "-",
  floor: (value: number | string | null | undefined) => {
    if (value == null) return "-";
    if (typeof value === "number" && value < 0)
      return `지하 ${Math.abs(value)}층`;
    return `${value}층`;
  },
  yield: (value: number | null | undefined) => {
    if (value == null) return "-";
    return `${value}%`;
  },
  household: (value: number | null | undefined) =>
    value != null ? `${value}세대` : "-",
};

export const pyeongToSqm = (value: string) => {
  return (parseFloat(value.slice(0, -1)) * 3.305785).toFixed(2) + "㎡";
};
