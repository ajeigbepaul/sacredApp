import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full px-10 flex items-center justify-between">
      <div className="w-[fit] px-4 rounded-lg flex items-center bg-[#F8F8F8] relative">
      <Image src={"/search.svg"} width={20} height={20} alt="search" />
        <input className="p-3 w-full bg-[#F8F8F8] border-none outline-none" placeholder="Search or type a word" />
      </div>
      <div className="w-fit flex items-center space-x-8">
        <Image src={"/bell.svg"} width={40} height={40} alt="bell" />
        <div className="w-fit flex items-center space-x-2 justify-center">
          <Image src={"/avatar.svg"} width={40} height={40} alt="avatat" />
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold">Lucas Peter</h2>
            <span className="text-xs">Lucaspeter@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
