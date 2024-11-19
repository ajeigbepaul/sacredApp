"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { cfArray } from "@/data/dashboard";

const Cf = () => {
  const [switchStates, setSwitchStates] = useState(
    cfArray.map(() => false) // Default all switches to false (unchecked)
  );
  const handleSwitchChange = (index: number) => {
    const newSwitchStates = [...switchStates];

    newSwitchStates[index] = !newSwitchStates[index]; // Toggle the switch state

    setSwitchStates(newSwitchStates); // Update state
  };
  console.log("Switched", switchStates);
  return (
    <div className="w-full h-full space-y-6 flex flex-col">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-[#181818] text-lg font-sfprodb">
            Categories and filters
          </h1>
          <h2 className="text-[#828890] text-sm font-sfprodm">
            Choose which of these categories you wish to filter and restrict
            access.
          </h2>
        </div>
        {/* sort */}
        <button className="p-2 px-2 rounded-lg border border-[#D9D9D9] text-[12px]">
          Sort
        </button>
      </div>
      <div className="w-full rounded-lg bg-white p-4 flex flex-col space-y-4 py-10">
        {cfArray.map((items, idx: number) => (
          <>
            <div key={idx} className="w-full py-4 ">
              <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center space-x-6">
                  <Image
                    src={items?.icon}
                    width={50}
                    height={50}
                    alt="cficons"
                    className="object-contain"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[#181818] text-lg font-sfprodb">
                      {items?.title}
                    </h1>
                    <h2 className="text-[#828890] text-sm font-sfprodm">
                      {items?.subtitle}
                    </h2>
                  </div>
                </div>
                <div className="w-fit px-2 space-x-3 flex items-center">
                  <span className="text-sm text-[#828890]">Allowed</span>
                  <Switch
                    checked={switchStates[idx]} // Bind switch state
                    onCheckedChange={() => handleSwitchChange(idx)} // Handle change
                  />
                  <span className="text-sm text-[#828890]">Blocked</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#D8DEE6]" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Cf;
