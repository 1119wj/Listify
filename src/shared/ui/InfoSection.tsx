import React from "react";

type InfoItemProps = {
  label: string;
  value: string;
  highlight?: boolean;
  isStatus?: boolean;
};

type InfoSectionProps = {
  title?: string;
  data: InfoItemProps[];
  cols?: 1 | 2 | 3 | 4;
};

const InfoSection = ({ title, data, cols = 3 }: InfoSectionProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "available":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "sold":
      case "rented":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-3">
      {title && <h3 className="text-lg font-medium text-gray-700">{title}</h3>}
      <div
        className={`grid grid-cols-1 ${
          cols === 1
            ? "md:grid-cols-1"
            : cols === 2
            ? "md:grid-cols-2"
            : cols === 3
            ? "md:grid-cols-3"
            : "md:grid-cols-4"
        } gap-x-6 gap-y-4`}
      >
        {data.map((item, index) => (
          <div key={index}>
            <p className="mb-1 text-sm font-medium text-gray-500">
              {item.label}
            </p>

            {item.isStatus ? (
              <div className="flex items-center">
                <span
                  className={`mr-2 inline-block h-3 w-3 rounded-full ${getStatusColor(
                    item.value
                  )}`}
                ></span>
                <span
                  className={
                    item.highlight
                      ? "font-semibold text-blue-700"
                      : "text-gray-800"
                  }
                >
                  {item.value}
                </span>
              </div>
            ) : (
              <p
                className={
                  item.highlight
                    ? "font-semibold text-blue-700"
                    : "text-gray-800"
                }
              >
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
