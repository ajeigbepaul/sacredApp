"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// Define the type for each row of data
type TableRow = {
  dateTime: string;
  action: { icon: string; text: string };
  ipAddress: string;
  type: string;
  domain: string;
};

// Define the props for the Table component
interface TableProps {
  data: TableRow[];
  blocked?: boolean;
}

const Table: React.FC<TableProps> = ({ data, blocked }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(8);
  const [filterText, setFilterText] = useState<string>("");
  const [sortColumn, setSortColumn] = useState<keyof TableRow | "">("");
  const [sortDirection, setSortDirection] = useState<
    "ascending" | "descending"
  >("ascending");

  // Sorting functionality
  const sortedData = [...data].sort((a, b) => {
    if (sortColumn) {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "ascending" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "ascending" ? 1 : -1;
    }
    return 0;
  });
  // Filtering functionality
  const filteredData = sortedData.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  // Pagination logic
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="w-full flex flex-col pb-10">
      <div className="mb-4 w-full flex items-center justify-between">
        {blocked ? (
          <>
            <h1 className="w-fit text-xl text-[#181818] font-sfprodb">
              Blocked Request list
            </h1>
            <div className="flex items-center space-x-1 w-fit p-2">
              <Select
                value={sortColumn}
                onValueChange={(value) =>
                  setSortColumn(value as keyof TableRow)
                }
              >
                <SelectTrigger className="border border-[#D9D9D9] bg-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dateTime">Date and Time</SelectItem>
                  <SelectItem value="ipAddress">IP Address</SelectItem>
                  <SelectItem value="type">Type</SelectItem>
                  <SelectItem value="domain">Domain</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={sortDirection}
                onValueChange={(value) =>
                  setSortDirection(value as "ascending" | "descending")
                }
              >
                <SelectTrigger className="border border-[#D9D9D9] bg-white">
                  <SelectValue placeholder="Direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ascending">Ascending</SelectItem>
                  <SelectItem value="descending">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="flex items-center space-x-1 w-fit p-2">
              <Select
                value={sortColumn}
                onValueChange={(value) =>
                  setSortColumn(value as keyof TableRow)
                }
              >
                <SelectTrigger className="border border-[#D9D9D9] bg-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dateTime">Date and Time</SelectItem>
                  <SelectItem value="ipAddress">IP Address</SelectItem>
                  <SelectItem value="type">Type</SelectItem>
                  <SelectItem value="domain">Domain</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={sortDirection}
                onValueChange={(value) =>
                  setSortDirection(value as "ascending" | "descending")
                }
              >
                <SelectTrigger className="border border-[#D9D9D9] bg-white">
                  <SelectValue placeholder="Direction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ascending">Ascending</SelectItem>
                  <SelectItem value="descending">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input
              placeholder="Filter table data..."
              value={filterText}
              onChange={handleFilterChange}
              className="w-fit"
            />
          </>
        )}
      </div>
      <div className="w-full bg-white p-4 py-8 rounded-xl">
        <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
          <thead className="bg-white">
            <tr>
              <th className="p-4 text-xs font-sfprodm text-left cursor-pointer text-[#424242]">
                Date and Time
              </th>
              <th className="p-4 text-xs font-sfprodm text-left text-[#424242]">
                Action
              </th>
              <th className="p-4 text-left text-xs font-sfprodm text-[#424242] cursor-pointer">
                IP Address
              </th>
              <th className="p-4 text-xs font-sfprodm text-[#424242] text-left cursor-pointer">
                Type
              </th>
              <th className="p-4 text-xs font-sfprodm text-left cursor-pointer">
                Domain
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className="odd:bg-[#F8F8F8] even:bg-white text-[#4F4F4F] border-b"
              >
                <td className="p-4 text-[#4F4F4F] text-sm font-sfprodm">
                  {row.dateTime}
                </td>
                <td className="p-4 flex items-center space-x-2">
                  <Image
                    src={row.action.icon}
                    width={20}
                    height={20}
                    alt="checkicon"
                    className="object-contain"
                  />
                  <span className="text-[#4F4F4F] text-sm font-sfprodm">
                    {row.action.text}
                  </span>
                </td>
                <td className="p-4 text-[#4F4F4F] text-sm font-sfprodm">
                  {row.ipAddress}
                </td>
                <td className="p-4 text-[#4F4F4F] text-sm font-sfprodm">
                  {row.type}
                </td>
                <td className="p-4 text-[#4F4F4F] text-sm font-sfprodm">
                  {row.domain}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 flex items-center space-x-2 py-2 text-sm rounded-md border border-[#D0D5DD]"
            disabled={currentPage === 1}
          >
            <FaArrowLeft />
            <span className="text-xs"> Previous</span>
          </button>
          <div className="text-sm text-center">
            <div className="inline-block border border-gray-300 rounded-md p-2">
              Page {currentPage} of {totalPages}
            </div>
          </div>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-4 flex items-center space-x-2 py-2 border border-[#D0D5DD] text-sm rounded-md"
            disabled={currentPage === totalPages}
          >
            <span className="text-xs"> Next</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
