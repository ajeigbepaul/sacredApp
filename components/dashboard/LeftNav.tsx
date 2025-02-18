// import { navlinks, sublinks } from "@/data/navlinks";
// import Image from "next/image";
// import React from "react";
// import NavMenu from "../NavMenu";
// import NavGeneral from "../NavGeneral";

// const LeftNav = () => {
//   return (
//     <div className="w-full h-full">
//       <div className="flex flex-col space-y-8 h-auto ">
//         <div className="w-full p-8">
//           <Image src={"/logo.svg"} alt="sacred-logo" width={150} height={100} />
//         </div>
//         {/* <div className="w-full flex flex-col space-y-12">

//         </div> */}
//         <div className="w-full flex flex-col space-y-3">
//           <h2 className="text-white px-8">MENU</h2>
//           {navlinks.map((item, idx) => (
//             <NavMenu key={idx} item={item} />
//           ))}
//         </div>
//         <div className="w-[80%] mx-auto h-[2px] bg-[#828890] my-8"/>
//         <div className="w-full flex flex-col space-y-3 py-20">
//           <h2 className="text-white px-8">GENERAL</h2>
//           {sublinks.map((item, idx) => (
//             <NavGeneral
//               key={idx}
//               item={{
//                 ...item,
//                 links: item.links.map((link) => ({
//                   ...link,
//                   router: link.route, // Add the router property
//                 })),
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeftNav;
import { combinedNavLinks } from "@/data/navlinks";
import Image from "next/image";
import React from "react";
import NavMenu from "../NavMenu";

const LeftNav = () => {
  // Separate links without sublinks and links with sublinks
  const navLinksWithoutSublinks = combinedNavLinks.filter(
    (item) => !item.links
  );
  const navLinksWithSublinks = combinedNavLinks.filter((item) => item.links);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col space-y-8 h-auto">
        <div className="w-full p-8">
          <Image src={"/ceelaLogo.svg"} alt="sacred-logo" width={200} height={100} className="object-contain" />
        </div>
        {/* Render Nav Links without Sublinks */}
        <div className="w-full flex flex-col space-y-3">
          <h2 className="text-white px-8 text-sm">MENU</h2>
          {navLinksWithoutSublinks.map((item, idx) => (
            <NavMenu key={idx} item={item} />
          ))}
        </div>
        {/* Horizontal line and "General" heading */}
        <div className="w-[80%] mx-auto h-[2px] bg-[#828890] my-8" />

        {/* Render Nav Links with Sublinks */}
        <div className="w-full flex flex-col space-y-3 py-20">
          <h2 className="text-white px-8 text-sm">GENERAL</h2>
          {navLinksWithSublinks.map((item, idx) => (
            <NavMenu key={idx} item={item} />
          ))}
        </div>
        {/* <div className="w-full flex flex-col space-y-3">
          <h2 className="text-white px-8">MENU</h2>
          {combinedNavLinks.map((item, idx) => (
            <NavMenu key={idx} item={item} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default LeftNav;
