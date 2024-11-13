import Image from "next/image";
import Link from "next/link";
import React from "react";
type systemProps = {
  title: string;
  code: string;
  cmd1: string;
  cmd2: string;
  more: string;
  selected: string;
};
const Systems = ({ title, code, cmd1, cmd2, more, selected }: systemProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-[#181818] font-sfprodm text-lg">{selected}</h1>
      <span className="text-[#828890] font-sfprodm text-sm">{title}</span>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <h2 className="text-sm text-[#828890]">Code:</h2>
          <span className="text-sm text-[#181818] font-sfprodb">{code}</span>
        </div>
        <button className="p-1 px-2 rounded-lg bg-[#D7FFF0] w-fit flex items-center space-x-2">
          <span className="text-[#181818] text-xs">Copy</span>
          <Image
            src="/copy.svg"
            width={20}
            height={20}
            alt="Google icon"
            className="object-contain"
          />
        </button>
      </div>
      <h2 className="text-[#828890] font-sfprodm text-sm">
        You can also configure it manually, by opening the command prompt and
        pasting this command there:
      </h2>
      <h2 className="text-[#181818] font-sfprodm text-sm">{cmd1}</h2>
      <h2 className="text-[#181818] font-sfprodm text-sm">{cmd2}</h2>
      <div className="text-[#828890] font-sfprodm text-sm">
        Get more instructions to start{" "}
        <Link href={more} className="text-[#007C4D]">
          here.
        </Link>
      </div>
    </div>
  );
};

export default Systems;
