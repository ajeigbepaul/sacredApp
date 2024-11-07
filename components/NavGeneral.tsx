import Image from "next/image";
import React, { useState } from "react";
interface itemProps {
  icon: string;
  title: string;
  links: subLinksProps[];
}
type subLinksProps = {
  subT: string;
  router: string;
};
const NavGeneral = ({ item }: { item: itemProps }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex flex-col h-auto px-2">
      <div className="flex flex-col h-auto py-4">
        <div className="w-full flex space-x-2">
          <Image src={item.icon} alt="navicon" width={24} height={24} />
          <h2 className="text-white">{item?.title}</h2>
          {item.links && item.links.length > 0 ? (
            <Image
              src={"/arrowdown.svg"}
              alt="navarrow"
              width={24}
              height={24}
              className="text-white cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            />
          ) : null}
        </div>
        {/* Show sublinks if isExpanded is true */}
        {isExpanded && (
          <div className="flex flex-col mt-1 w-full">
            {item.links.map((link, index) => (
              <div key={index} className="py-3 pl-8">
                <a href={link.router} className="text-white text-[14px] hover:underline">
                  {link.subT}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavGeneral;
