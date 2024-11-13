import { tableData } from "@/data/dashboard";
import Image from "next/image";
import React from "react";
import Table from "@/components/dashboard/Table";
const Activity = () => {
  const activityA = [
    {
      title: "Traffic per hour",
      count: "245",
      percent: "11.02%",
      icon: "/up.svg",
      bgcolor: "#E3EDFF",
    },
    {
      title: "Blocked Categories",
      count: "624",
      percent: "11.02%",
      icon: "/down.svg",
      bgcolor: "#E3F5FF",
    },
    {
      title: "Safe internet search percentage",
      count: "60%",
      percent: "11.02%",
      icon: "/up.svg",
      bgcolor: "#E3EDFF",
    },
    {
      title: "Total domains",
      count: "245",
      percent: "11.02",
      icon: "/down.svg",
      bgcolor: "#E3F5FF",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col space-y-4">
      <h1 className="text-[#181818] text-lg">Activity</h1>
      <div className="w-full grid grid-cols-4 gap-4">
        {activityA.map(({ title, count, percent, icon, bgcolor }, idx) => (
          <div
            key={idx}
            className="py-8 px-2 rounded-2xl flex flex-col space-y-6"
            style={{ backgroundColor: bgcolor }}
          >
            <h2 className="text-[#424242] text-[14px] font-sfprodm">{title}</h2>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl text-[#424242] font-sfprodb">{count}</h1>
              <div className="flex items-center space-x-2">
                <h2 className="text-[#424242] text-sm font-sfprodm">
                  +{percent}
                </h2>
                <Image
                  src={icon}
                  width={20}
                  height={20}
                  alt="Google icon"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default Activity;
