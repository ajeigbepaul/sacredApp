"use client";
import Image from "next/image";
import React, { useState } from "react";
import BillingCard from "./components/BillingCard";
import { cn } from "@/lib/utils";
import { FaDownload } from "react-icons/fa";

const Billing = () => {
  const btnArray = ["View all", "Active", "completed"];
  const [active, setActive] = useState("View all");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const handleActive = (item: string) => {
    setActive(item);
  };
  // Handle filter by status
  const filteredInvoices = invoices.filter((invoice) => {
    if (active === "View all") return true;
    return invoice.status.toLowerCase() === active.toLowerCase();
  });

  // Handle search functionality
  const searchedInvoices = filteredInvoices.filter((invoice) =>
    Object.values(invoice)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  // Handle sort functionality (by amount, ascending/descending)
  const sortedInvoices = searchedInvoices.sort((a, b) => {
    const amountA = parseFloat(a.amount.replace("$", ""));
    const amountB = parseFloat(b.amount.replace("$", ""));
    return sortDirection === "asc" ? amountA - amountB : amountB - amountA;
  });

  const toggleSortDirection = () =>
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-[#181818] font-sfprodb text-lg">
            Plans & Billings
          </h2>
          <p className="text-xs text-[#828890] font-sfprodm">
            Manage your plan and billing history here.
          </p>
        </div>
        <button className="p-1 bg-white w-fit px-2 border border-[#D9D9D9] flex items-center space-x-2">
          <Image
            src="/question.svg"
            width={20}
            height={20}
            alt="mastercardicon"
            className="object-contain"
          />
          <h2 className="text-xs text-[#181818] font-sfprodm">Need help ?</h2>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <BillingCard
          btnname="Current plan"
          plantitle="Basic plan"
          plandescr=" For families and homes."
          amt="$10"
          dur="per month"
        />
        <BillingCard
          btnname="Upgrade plan"
          plantitle="Basic plan"
          plandescr=" For families and homes."
          amt="$15"
          dur="per month"
        />
        <BillingCard
          btnname="Upgrade plan"
          plantitle="Basic plan"
          plandescr=" For families and homes."
          amt="$25"
          dur="per month"
        />
      </div>
      <div className="bg-white w-full rounded-lg flex flex-col py-6 p-4">
        <h1 className="text-lg font-sfprodb mb-4 text-[#181818]">Billing History</h1>
        <div className="w-full flex items-center justify-between">
          <div className="bg-[#F8F8F8] rounded-lg w-fit p-1 flex items-center space-x-2">
            {btnArray.map((btn, idx) => (
              <div
                key={idx}
                className={cn("p-2  cursor-pointer text-[#828890]", {
                  "bg-white rounded-lg text-[#181818]": active == btn,
                })}
                onClick={() => handleActive(btn)}
              >
                {btn}
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-[fit] px-4 rounded-lg flex items-center border border-[#D9D9D9] bg-white relative">
              <Image src={"/search.svg"} width={20} height={20} alt="search" />
              <input
                className="p-2 w-full bg-white  border-none outline-none"
                placeholder="Search or type a word"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            {/* Sort goes here */}
            <button
              onClick={toggleSortDirection}
              className="p-2 w-fit flex items-center space-x-1 bg-white rounded-lg border border-[#D9D9D9]"
            >
              Sort{" "}
              {sortDirection === "asc" ? (
                <Image
                  src={"/sort.svg"}
                  width={14}
                  height={14}
                  alt="sorticon"
                />
              ) : (
                <Image
                  src={"/sort.svg"}
                  width={14}
                  height={14}
                  alt="sorticon"
                />
              )}
            </button>
          </div>
        </div>
        <div className="w-full my-8 h-[2px] bg-[#D9D9D9]" />
        {/* Display Filtered, Searched, and Sorted Data */}
        <div className="mt-4">
          {sortedInvoices.length > 0 ? (
            sortedInvoices.map((invoice) => (
              <div
                key={invoice.invoiceNumber}
                className="flex h-20 justify-between items-center py-2 border-b"
              >
                {" "}
                <div className="flex items-center space-x-3 w-[20%]">
                  <Image
                    src={"/invoice.svg"}
                    width={20}
                    height={20}
                    alt="search"
                  />
                  <span className="text-[#181818] font-sfprodb text-sm">
                    {invoice.invoiceNumber}
                  </span>
                </div>
                <span className="w-[20%] text-[#828890]">{invoice.date}</span>
                <span className="w-[20%] text-[#828890]">{invoice.plan}</span>
                <span className="w-[20%] text-[#828890]">{invoice.amount}</span>
                <span className="capitalize w-[20%] text-[#828890]">
                  {invoice.status}
                </span>
                <Image
                  src={"/download.svg"}
                  width={20}
                  height={20}
                  alt="search"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-[#828890]">No invoices found.</p>
          )}
        </div>
      </div>
    </div>
  );
};
// Sample invoices data
const invoices = [
  {
    invoiceNumber: "INV-001",
    date: "2024-11-01",
    plan: "Basic",
    amount: "$50",
    status: "active",
  },
  {
    invoiceNumber: "INV-002",
    date: "2024-11-05",
    plan: "Standard",
    amount: "$100",
    status: "completed",
  },
  {
    invoiceNumber: "INV-003",
    date: "2024-11-10",
    plan: "Premium",
    amount: "$150",
    status: "active",
  },
  {
    invoiceNumber: "INV-004",
    date: "2024-11-15",
    plan: "Enterprise",
    amount: "$300",
    status: "completed",
  },
  {
    invoiceNumber: "INV-005",
    date: "2024-11-20",
    plan: "Custom",
    amount: "$500",
    status: "active",
  },
];
export default Billing;
