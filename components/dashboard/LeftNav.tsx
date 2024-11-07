import { navlinks, sublinks } from "@/data/navlinks";
import Image from "next/image";
import React from "react";
import Navlinks from "../NavMenu";
import NavMenu from "../NavMenu";
import NavGeneral from "../NavGeneral";

const LeftNav = () => {
  return (
    <div className="w-full h-full">
      <div className="p-8 flex flex-col space-y-8 h-auto ">
        <div className="w-full">
          <Image src={"/logo.svg"} alt="sacred-logo" width={150} height={100} />
        </div>
        {/* <div className="w-full flex flex-col space-y-12">

        </div> */}
        <div className="w-full flex flex-col space-y-3">
          <h2 className="text-white">MENU</h2>
          {navlinks.map((item, idx) => (
            <NavMenu key={idx} item={item} />
          ))}
        </div>
        <div className="w-full h-[2px] bg-[#828890] my-8"/>
        <div className="w-full flex flex-col space-y-3 py-20">
          <h2 className="text-white">GENERAL</h2>
          {sublinks.map((item, idx) => (
            <NavGeneral
              key={idx}
              item={{
                ...item,
                links: item.links.map((link) => ({
                  ...link,
                  router: link.route, // Add the router property
                })),
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
