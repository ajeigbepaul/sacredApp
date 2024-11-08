"use client";

import Header from "@/components/dashboard/Header";
import LeftNav from "@/components/dashboard/LeftNav";
import { usePathname } from "next/navigation";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <main className={`h-screen bg-[#F8F8F8] flex overflow-hidden`}>
      <div className="w-[25%] h-full bg-[#181818] md:flex hidden overflow-y-auto scrollbar-hidden">
        <LeftNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 h-full flex flex-col">
        {/* Static Header */}
        <div className="w-full h-[14vh] border-b border-b-[#D9D9D9] bg-white">
          <Header />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hidden">
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
