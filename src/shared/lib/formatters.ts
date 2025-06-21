export const genericFormatters = {
  string: (value: string | null | undefined) => value ?? "-",
  number: (value: string | undefined) => value?.toLocaleString() ?? "-",
  boolean: (value: boolean | null | undefined) => {
    if (value == null) return "-";
    return value ? "있음" : "없음";
  },
  date: (value: Date | null | undefined) => {
    if (value == null) return "-";
    return value.toLocaleDateString("ko-KR");
  },
};
