"use client";
import DomainTable from "@/components/dashboard/DomainTable";
import { domainData } from "@/data/dashboard";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CustomDomain = () => {
  const [allow, setAllow] = useState("");
  const [blocked, setBlocked] = useState("");
  const [selectedDomain, setSelectedDomain] = useState(""); // New state for selected domain
  const [domains, setDomains] = useState([
    "sacredeyes.com",
    "example.com",
    "test.com",
    "demo.com",
  ]); // State for domains
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDomain(e.target.value); // Update selected domain
    console.log(e.target.value); // Log the selected domain
  };
  const handleDelete = () => {
    setDomains(domains.filter((domain) => domain !== selectedDomain)); // Remove selected domain
    setSelectedDomain(""); // Clear selected domain
  };
  return (
    <div className="w-full flex flex-col space-y-4">
      <h1 className="text-[#181818] text-2xl font-sfprodb">Custom Domains</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg py-6 w-full flex flex-col space-y-4 p-4">
          <div className="flex items-start space-x-2">
            <Image
              src={"/custom.svg"}
              alt="domainicon"
              width={32}
              height={32}
            />
            <div>
              <h2 className="font-sfprodm text-lg text-[#181818]">
                Top Blocked Domains
              </h2>
              <h2 className="text-sm font-sfprodm text-[#828890]">
                Here you can allow a domain{" "}
              </h2>
            </div>
          </div>
          <div className="w-full bg-white border rounded-lg border-[#D9D9D9] flex items-center">
            <button
              disabled
              className="bg-[#F8F8F8] p-3 text-[#828890] text-[16px]"
            >
              http://
            </button>
            <input
              value={allow}
              className="p-3 w-full bg-white"
              name="allow"
              placeholder="domain.com"
              onChange={(e) => setAllow(e.target.value)}
            />
          </div>
          <button className="px-4 w-fit rounded-lg p-2 text-white bg-[#007C4D]">
            Allow domain
          </button>
          <div className="flex items-center justify-between w-[70%]">
            <h2 className="text-lg text-[#181818] font-sfprodm font-medium">
              Allowed domain (4)
            </h2>
            <Link href={"#"} className="underline text-sm text-[#F79E1B]">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {domains.map((domain) => (
              <label key={domain} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={domain}
                  checked={selectedDomain === domain}
                  onChange={handleChange} // Handle change for radio buttons
                  className="mr-2"
                />
                {domain}
              </label>
            ))}
          </div>
          <button
            onClick={handleDelete}
            disabled={!selectedDomain} // Disable if no domain is selected
            className="px-4 w-fit rounded-lg p-3 text-xs text-[#FE3D01] bg-[#FFEBE5]"
          >
            Delete Selected Domain
          </button>
        </div>
        <div className="bg-white rounded-lg py-6 w-full flex flex-col space-y-4 p-4">
          <div className="flex items-start space-x-2">
            <Image
              src={"/custom.svg"}
              alt="domainicon"
              width={32}
              height={32}
            />
            <div>
              <h2 className="font-sfprodm text-lg text-[#181818]">
                Custom Blocked domains
              </h2>
              <h2 className="text-sm font-sfprodm text-[#828890]">
                Here you can block a domain{" "}
              </h2>
            </div>
          </div>
          <div className="w-full bg-white border rounded-lg border-[#D9D9D9] flex items-center">
            <button
              disabled
              className="bg-[#F8F8F8] p-3 text-[#828890] text-[16px]"
            >
              http://
            </button>
            <input
              value={blocked}
              className="p-3 w-full bg-white"
              name="allow"
              placeholder="domain.com"
              onChange={(e) => setBlocked(e.target.value)}
            />
          </div>
          <button className="px-4 w-fit rounded-lg p-2 text-white bg-[#FE3D01]">
            Block domain
          </button>
          <div className="flex items-center justify-between w-[70%]">
            <h2 className="text-lg text-[#181818] font-sfprodm font-medium">
              Allowed domain (4)
            </h2>
            <Link href={"#"} className="underline text-sm text-[#F79E1B]">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {domains.map((domain) => (
              <label key={domain} className="flex items-center space-x-2">
                <input
                  type="radio"
                  value={domain}
                  checked={selectedDomain === domain}
                  onChange={handleChange} // Handle change for radio buttons
                  className="mr-2"
                />
                {domain}
              </label>
            ))}
          </div>
          <button
            onClick={handleDelete}
            disabled={!selectedDomain} // Disable if no domain is selected
            className="px-4 w-fit rounded-lg p-3 text-xs text-[#FE3D01] bg-[#FFEBE5]"
          >
            Delete Selected Domain
          </button>
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg py-6 flex flex-col space-y-4">
        <h2 className="text-lg font-sfprodb text-[#181818]">
          Predefined Platform Filters
        </h2>
        <h2 className="text-sm font-sfprodm text-[#828890]">
         {` Easily block popular sites, including their main domain and all
          associated domains required for the platform's functionality. For
          example, you can enable access to Social Networks in the main
          categories and filters but choose to block specific platforms like
          Twitter.`}
        </h2>
        <div className="flex items-center justify-center">
          <DomainTable data={domainData} />
        </div>
      </div>
    </div>
  );
};

export default CustomDomain;
