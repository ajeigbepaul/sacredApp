

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: string;
  title: string;
  route?: string;
  activeicon?: string;
  links?: { subT: string; route: string }[];
}

const NavMenu = ({ item }: { item: NavItemProps }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine if parent or any sublink is active
  const isParentActive = pathname === item.route;
  const isAnySubLinkActive =
    item.links?.some((link) => pathname === link.route) || false;

  const handleParentClick = () => {
    if (item.route) {
      router.push(item.route);
    } else {
      setIsExpanded(!isExpanded);
      if (item.links && item.links.length > 0) {
        router.push(item.links[0].route); // Navigate to the first sublink if no direct route
      }
    }
  };

  useEffect(() => {
    if (isAnySubLinkActive) setIsExpanded(true);
  }, [isAnySubLinkActive]);

  return (
    <div className="flex flex-col items-start px-0 cursor-pointer relative">
      {/* Parent Link */}
      <div
        onClick={handleParentClick}
        className="flex items-center px-8 w-full relative"
      >
        {(isParentActive || isAnySubLinkActive) && (
          <div className="absolute left-0 top-0 h-full w-2 bg-[#007C4D] rounded-tr-full rounded-br-full"></div>
        )}
        <div
          className={cn("w-full flex items-center px-4 py-3", {
            "bg-[#2B2B2B]": isParentActive || isAnySubLinkActive,
          })}
        >
          <Image
            src={`${
              isParentActive || isAnySubLinkActive ? item.activeicon : item.icon
            }`}
            alt="navicon"
            width={24}
            height={24}
          />
          <h2
            className={`pl-4 text-[14px] ${
              isParentActive || isAnySubLinkActive
                ? "text-white"
                : "text-gray-400"
            }`}
          >
            {item.title}
          </h2>
          {item.links && (
            <Image
              src="/arrowdown.svg"
              alt="arrow"
              width={24}
              height={24}
              className={`transition-transform duration-300 ml-4 ${
                isExpanded ? "rotate-180" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            />
          )}
        </div>
      </div>

      {/* Sublinks */}
      {isExpanded && item.links && (
        <div className="flex flex-col pl-10 space-y-2">
          {item.links.map((link, index) => (
            <div key={index} className="pl-12 py-1">
              <span
                onClick={() => router.push(link.route)}
                className={`cursor-pointer text-sm ${
                  pathname === link.route
                    ? "text-white font-semibold"
                    : "text-gray-400"
                }`}
              >
                {link.subT}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavMenu;
