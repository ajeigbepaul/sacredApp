"use client";
import Image from "next/image";
import React, { useState } from "react";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  return (
    <div className="w-full flex flex-col space-y-4 bg-white rounded-lg p-4">
      <div className="flex flex-col space-y-1">
        <h1 className="text-lg font-sfprodb text-[#181818]">User profile</h1>
        <h6 className="text-sm font-sfprodm text-[#828890]">
          User management and basic information
        </h6>
      </div>
      <div className="w-full flex items-center space-x-2">
        <div className="w-20 h-20 rounded-full">
          <Image
            src={"/profileimg.svg"}
            width={100}
            height={100}
            alt="profileicon"
            className="object-contain"
          />
        </div>
        <button
          className={`px-4 w-fit rounded-lg p-2 text-xs font-sfprodm bg-[#007C4D] text-white`}
        >
          Upload now
        </button>
        <button
          className={`px-4 w-fit rounded-lg p-2 text-xs font-sfprodm bg-white border border-[#BACCDF] text-[#181818]`}
        >
          Cancel
        </button>
      </div>
      <div>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-[#1D1D1DCC] font-sfprodm">
                First name
              </label>
              <div className="w-full bg-white border rounded-lg border-[#D9D9D9] flex items-center">
                <input
                  value={firstName}
                  className="p-3 w-full bg-white border rounded-lg border-[#D9D9D9]"
                  name="allow"
                  placeholder="Lucas"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-[#1D1D1DCC] font-sfprodm">
                Last Name
              </label>
              <div className="w-full bg-white border rounded-lg border-[#D9D9D9] flex items-center">
                <input
                  value={lastName}
                  className="p-3 w-full bg-white border rounded-lg border-[#D9D9D9]"
                  name="allow"
                  placeholder="Peters"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="w-full flex flex-col space-y-1">
              <label className="text-sm text-[#1D1D1DCC] font-sfprodm">
                Username
              </label>
              <div className="w-full bg-white border rounded-lg border-[#D9D9D9] flex items-center">
                <button
                  disabled
                  className="bg-[#F8F8F8] p-3 text-[#828890] text-[16px]"
                >
                  http://
                </button>
                <input
                  value={userName}
                  className="p-3 w-full bg-white "
                  name="allow"
                  placeholder="Lucaspeter"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-[#1D1D1DCC] font-sfprodm">
                Email address
              </label>
              <div className="w-full bg-white border rounded-lg border-[#D9D9D9] flex items-center">
                <input
                  value={email}
                  className="p-3 w-full bg-white border rounded-lg border-[#D9D9D9]"
                  name="allow"
                  placeholder="TemidayoA56@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="w-full my-8 h-[2px] bg-[#D9D9D9]" />
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col space-y-1">
          <h6 className="text-sm text-[#181818] font-sfprodb">Logout ?</h6>
          <h6 className="text-xs text-[#1D1D1DCC] font-sfprodm">
            You can login any time with your details
          </h6>
        </div>
        <button
          className={`px-4 w-fit rounded-lg p-2 text-xs font-sfprodm bg-[#FF00000D] text-[#FF1F00]`}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
