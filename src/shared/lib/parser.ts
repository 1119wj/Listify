export type BaseContentType = {
  label: string;
  value: string;
};

export type ValueFormatter<T> = {
  [K in keyof T]?: {
    label: string;
    format?: (value: T[K]) => string;
  };
};

export const createParser = <T extends Record<string, any>>(
  formatConfig: ValueFormatter<T>
) => {
  return (data: Partial<T>): BaseContentType[] => {
    if (!data) return [];

    return Object.entries(formatConfig)
      .map(([key, config]) => {
        if (!config || data[key as keyof T] === undefined) return null;

        const value = data[key as keyof T];
        const formattedValue = config.format
          ? config.format(value)
          : String(value ?? "-");

        return {
          label: config.label,
          value: formattedValue,
        };
      })
      .filter((item): item is BaseContentType => item !== null);
  };
};
