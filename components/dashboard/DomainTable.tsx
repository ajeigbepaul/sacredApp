"use client";
import React, { useState } from "react";
import Image from "next/image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
// Define the type for each row of data
type TableRow = {
  platform: { icon: string; text: string };
  status: string;
  action: { icon: string; text: string };
};

// Define the props for the Table component
interface TableProps {
  data: TableRow[];
}

const DomainTable: React.FC<TableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(8);

  // Pagination logic
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getDisplayedPages = () => {
    const pageRange = 3; // Pages to show around the current page
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // If there are fewer than 7 pages, show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= pageRange) {
        // Close to the beginning
        for (let i = 1; i <= pageRange + 1; i++) {
          pages.push(i);
        }
        pages.push("...", totalPages);
      } else if (currentPage >= totalPages - pageRange) {
        // Close to the end
        pages.push(1, "...");
        for (let i = totalPages - pageRange; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Somewhere in the middle
        pages.push(1, "...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="w-full flex flex-col pb-10">
      <div className="w-full bg-white p-4 py-8 rounded-xl">
        <table className="min-w-full border border-gray-200 rounded-md overflow-hidden">
          <thead className="bg-white">
            <tr>
              <th className="p-4 text-xs font-sfprodm text-left cursor-pointer text-[#424242]">
                Platform
              </th>
              <th className="p-4 text-xs font-sfprodm text-left text-[#424242]">
                Status
              </th>
              <th className="p-4 text-left text-xs font-sfprodm text-[#424242] cursor-pointer">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, index) => (
              <tr
                key={index}
                className="odd:bg-[#F8F8F8] even:bg-white text-[#4F4F4F] border-b"
              >
                <td className="p-4 flex items-center space-x-2">
                  <Image
                    src={row.platform.icon}
                    width={20}
                    height={20}
                    alt="checkicon"
                    className="object-contain"
                  />
                  <span className="text-[#4F4F4F] text-sm font-sfprodm">
                    {row.platform.text}
                  </span>
                </td>
                <td className="p-4 text-[#4F4F4F] text-sm font-sfprodm">
                  {row.status}
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
          {/* Page Tabs */}
          <div className="flex items-center space-x-2">
            {getDisplayedPages().map((page, index) =>
              typeof page === "number" ? (
                <button
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1  rounded-md text-sm ${
                    currentPage === page
                      ? "bg-[#F9FAFB] text-[#2B3037]"
                      : "text-[#828890] bg-transparent"
                  }`}
                >
                  {page}
                </button>
              ) : (
                <span key={index} className="px-3 py-1 text-gray-500">
                  {page}
                </span>
              )
            )}
          </div>
          {/* <div className="text-sm text-center">
            <div className="inline-block border border-gray-300 rounded-md p-2">
              Page {currentPage} of {totalPages}
            </div>
          </div> */}
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

export default DomainTable;
