"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";
import { getCategories } from "@/services/api/categories";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { postCategoryUpdate } from "@/services/api/categories";
import { toast } from "sonner";
// Define the type for the items in cfArray
export type CfItem = {
  icon: string;
  title: string;
  subtitle: string;
};
const cfArray: CfItem[] = [
  {
    icon: "/porn.svg",
    title: "Adult & Pornography",
    subtitle: "Pornography videos and movies",
  },
  {
    icon: "/malicious.svg",
    title: "Maliciuous",
    subtitle: "Block malicious contents",
  },
  {
    icon: "/adultmixed.svg",
    title: "Adult Mixed Content",
    subtitle: "Pornography videos and movies",
  },
  {
    icon: "/ads.svg",
    title: "Ads & Tracking",
    subtitle: "Block Ads and Tracking servers",
  },
  { icon: "/torrent.svg", title: "Torrents", subtitle: "Block all Torrents" },
  {
    icon: "/p2p.svg",
    title: "P2P & File Sharing",
    subtitle: "Block all p2p & Sharing",
  },
  {
    icon: "/proxy.svg",
    title: "Proxy & VPNs",
    subtitle: "Block VPNs and Proxy",
  },
];

const Cf = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["getCategories"],
    queryFn: getCategories,
    staleTime: 5 * 60 * 1000,
  });

  const { mutateAsync } = useMutation({
    mutationFn: postCategoryUpdate,
    onSuccess: async () => {
      toast.success("category updated successfully", {
        position: "bottom-right",
      });
      queryClient.invalidateQueries({
        queryKey: ["getUsers"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "An error occurred", {
        position: "bottom-right",
      });
    },
  });

  // Combine cfArray and data?.data based on matching title and name
  const combinedArray = cfArray.map((cfItem) => {
    const matchingData = data?.data?.find(
      (dataItem: any) => dataItem.name === cfItem.title
    );
    return {
      ...cfItem,
      ...matchingData, // Spread the matching object properties into the cfItem
    };
  });

  const [switchStates, setSwitchStates] = useState(
    combinedArray.map(() => true) // Default all switches to false (unchecked)
  );

  const handleSwitchChange = async (index: number, id: string) => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[index] = !newSwitchStates[index]; // Toggle the switch state
    setSwitchStates(newSwitchStates); // Update state
    try {
      await mutateAsync(id);
    } catch (error) {
      console.log("Error:Something went wrong", error);
    }
  };

  console.log("Combined Data", combinedArray); // Logs the merged array

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
        {/* Sort Button */}
        <button className="p-2 px-2 rounded-lg border border-[#D9D9D9] text-[12px]">
          Sort
        </button>
      </div>
      <div className="w-full rounded-lg bg-white p-4 flex flex-col space-y-4 py-10">
        {combinedArray.map((item, idx: number) => (
          <React.Fragment key={idx}>
            <div className="w-full py-4">
              <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center space-x-6">
                  <Image
                    src={item?.icon}
                    width={50}
                    height={50}
                    alt="cficons"
                    className="object-contain"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[#181818] text-lg font-sfprodb">
                      {item?.title}
                    </h1>
                    <h2 className="text-[#828890] text-sm font-sfprodm">
                      {item?.subtitle}
                    </h2>
                  </div>
                </div>
                <div className="w-fit px-2 space-x-3 flex items-center">
                  <span className="text-sm text-[#828890]">Allowed</span>
                  <Switch
                    checked={switchStates[idx]} // Bind switch state
                    onCheckedChange={() => handleSwitchChange(idx, item?._id)} // Handle change
                  />
                  <span className="text-sm text-[#828890]">Blocked</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[2px] bg-[#D8DEE6]" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Cf;
