import React from "react";

const BillingCard = ({
  plantitle,
  plandescr,
  amt,
  dur,
  btnname,
}: {
  plantitle: string;
  plandescr: string;
  amt: string;
  dur: string;
  btnname: string;
}) => {
  return (
    <div className="bg-white rounded-lg border border-[#D9D9D9] py-4 w-full flex flex-col space-y-4 p-4">
      <div className="flex flex-col items-start space-y-2">
        <h2 className="font-sfprodm text-lg text-[#181818]">{plantitle}</h2>
        <h2 className="text-sm font-sfprodm text-[#828890]">{plandescr} </h2>
      </div>
      <div className="flex items-center space-x-2">
        <h1 className="text-lg font-sfprodb text-[#181818]">{amt}</h1>
        <h6 className="text-xs text-[#828890]">{dur}</h6>
      </div>
      <button
        disabled={btnname === "Current plan"}
        className={`px-4 w-full rounded-lg p-2 text-xs font-sfprodm ${
          btnname === "Current plan" ? "bg-[#F8F8F8] text-[#1B223C]" : "bg-[#007C4D] text-white"
        } `}
      >
        {btnname}
      </button>
    </div>
  );
};

export default BillingCard;
