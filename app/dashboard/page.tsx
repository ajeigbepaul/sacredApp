"use client";
import Systems from "@/components/dashboard/Systems";
import { setupArray, stepsArray } from "@/data/dashboard";
import { cn } from "@/lib/utils";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Dashboard = () => {

  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState("Windows");
  const handleActive = (idx: number, name: string) => {
    setActive(idx);
    setSelected(name);
  };
  // if (!session) {
  //   return router.push("/");
  // } else {
    return (
      <main className="w-full h-full flex flex-col space-y-4">
        <h1 className="text-[#181818] text-lg">Configurations</h1>
        <div className="py-10 w-full flex flex-col space-y-4 px-4 bg-[#031E14] rounded-lg">
          <h2 className="text-white text-sm">
            {` We're thrilled to have you onboard!`}👋
          </h2>
          <p className="text-[#828890] text-sm">{`You've taken the first step toward creating a safer and more controlled online experience. Whether you're protecting your family or enhancing workplace productivity, Sacred Eyes is here to give you the tools you need to manage and secure your digital world effortlessly.
      Start exploring your dashboard, customize your settings, and enjoy peace of mind knowing that your online environment is in safe hands.`}</p>
          <button className="md:w-[20%] bg-white text-[#181818] text-sm p-2 rounded-lg">
            Start Exploring
          </button>
        </div>
        <div className="w-full bg-white rounded-lg h-auto py-10 px-4 flex flex-col space-y-4">
          <h2 className="text-[#181818] font-sfprodm text-xl">
            Setting Up Sacred Eyes
          </h2>
          <div className="w-fit rounded-xl bg-[#F8F8F8] flex items-center space-x-6 p-2">
            {setupArray.map(({ name, Icon }, idx) => (
              <button
                onClick={() => handleActive(idx, name)}
                key={idx}
                className={cn(
                  "w-fit p-3 rounded-xl  flex items-center space-x-2 transition-opacity duration-300",
                  { "bg-white": active == idx }
                )}
              >
                <Icon
                  className={cn("text-2xl text-[#828890]", {
                    "text-[#007C4D]": active == idx,
                  })}
                />
                <h2
                  className={cn("text-[#828890]", {
                    "text-[#007C4D]": active == idx,
                  })}
                >
                  {name}
                </h2>
              </button>
            ))}
          </div>
          {(() => {
            switch (active) {
              case 0:
                return (
                  <Systems
                    selected={selected}
                    title={`To setup SacredEyes on your ${selected}, please copy and paste this our DNS IP on your windows network settings
                  To setup SacredEyes on your router, kindly use the following steps:`}
                    code="54.164.114.48"
                    // cmd1=" setsh webbrowser ips8 set dns rou-ter stat 165.848.83
                    //   index=4"
                    // cmd2="setsh webbrowser ips8 set dns rou-ter stat 165.848.83
                    //   index=4"
                    // more="https://www.google.com"
                  />
                );
              case 1:
                return (
                  <Systems
                    selected={selected}
                    title={`To setup SacredEyes on your ${selected}, please copy and paste this our DNS IP on your windows network settings
                  To setup SacredEyes on your router, kindly use the following steps:`}
                    code="54.164.114.48"
                    // cmd1=" setsh webbrowser ips8 set dns rou-ter stat 165.848.83
                    //   index=4"
                    // cmd2="setsh webbrowser ips8 set dns rou-ter stat 165.848.83
                    //   index=4"
                    // more="https://www.google.com"
                  />
                );
              case 2:
                return (
                  <Systems
                    selected={selected}
                    title={`To setup SacredEyes on your ${selected}, please copy and paste this our DNS IP on your windows network settings
                  To setup SacredEyes on your router, kindly use the following steps:`}
                    code="54.164.114.48"
                    // cmd1=" setsh webbrowser ips8 set dns rou-ter stat 165.848.83
                    //   index=4"
                    // cmd2="setsh webbrowser ips8 set dns rou-ter stat 165.848.83
                    //   index=4"
                    // more="https://www.google.com"
                  />
                );
              case 3:
                return (
                  <Systems
                    selected={selected}
                    title={`To setup SacredEyes on your ${selected}, please copy and paste this our DNS IP on your windows network settings
                  To setup SacredEyes on your router, kindly use the following steps:`}
                    code="54.164.114.48"
                    // cmd1=" setsh webbrowser ips8 set dns rou-ter stat 165.848.83
                    //   index=4"
                    // cmd2="setsh webbrowser ips8 set dns rou-ter stat 165.848.83
                    //   index=4"
                    // more="https://www.google.com"
                  />
                );
              case 4:
                return (
                  <Systems
                    selected={selected}
                    title={`To setup SacredEyes on your ${selected}, please copy and paste this our DNS IP on your windows network settings
                  To setup SacredEyes on your router, kindly use the following steps:`}
                    code="54.164.114.48"
                    // cmd1=" setsh webbrowser ips8 set dns rou-ter stat 165.848.83
                    //   index=4"
                    // cmd2="setsh webbrowser ips8 set dns rou-ter stat 165.848.83
                    //   index=4"
                    // more="https://www.google.com"
                  />
                );
              // Add more cases as needed
              default:
                return <div></div>;
            }
          })()}
        </div>
        <div className="w-full rounded-lg h-auto pb-10 ">
          <div className="w-full grid grid-cols-2 gap-4">
            {stepsArray.map(({ step, title, descr }, idx) => (
              <div
                key={idx}
                className="w-full p-4 py-8 bg-white rounded-lg flex flex-col space-y-4"
              >
                <div className="flex flex-col space-y-1">
                  <h2 className="text-[#181818] text-lg font-sfprodm">
                    Step {step}
                  </h2>
                  <p className="text-[#B7BDC5] text-sm font-sfprodm">{title}</p>
                </div>
                <p className="text-[#828890] text-[16px] font-sfprodm">
                  {descr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
};

export default Dashboard;
