"use client";
import React, { useState } from "react";

const Security = () => {
  const [currentpassword, setCurrentPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");
  return (
    <div className="w-full h-screen flex flex-col space-y-4 bg-white rounded-lg p-4">
      <div className="flex flex-col space-y-1">
        <h1 className="text-lg font-sfprodb text-[#181818]">Security</h1>
        <h6 className="text-sm font-sfprodm text-[#828890]">
          Change password and update password
        </h6>
      </div>
      <div className="h-[70vh]">
        <form>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="text-sm text-[#1D1D1DCC] font-sfprodm">
                Current password
              </label>
              <div className="w-full bg-white border rounded-lg border-[#D9D9D9] flex items-center">
                <input
                  type="password"
                  value={currentpassword}
                  className="p-3 w-full bg-white border rounded-lg border-[#D9D9D9]"
                  name="allow"
                  placeholder="*****"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 py-4">
            <div>
              <label className="text-sm text-[#1D1D1DCC] font-sfprodm">
                New password
              </label>
              <div className="w-full bg-white border rounded-lg border-[#D9D9D9] flex items-center">
                <input
                  type="password"
                  value={newpassword}
                  className="p-3 w-full bg-white border rounded-lg border-[#D9D9D9]"
                  name="allow"
                  placeholder="TemidayoA56@gmail.com"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-[#1D1D1DCC] font-sfprodm">
                Repeat password
              </label>
              <div className="w-full bg-white border rounded-lg border-[#D9D9D9] flex items-center">
                <input
                  type="password"
                  value={repeatpassword}
                  className="p-3 w-full bg-white border rounded-lg border-[#D9D9D9]"
                  name="allow"
                  placeholder="TemidayoA56@gmail.com"
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <button
        className={`px-4 w-full rounded-lg p-2 text-xs font-sfprodm bg-[#007C4D] text-white`}
      >
        Update password
      </button>
    </div>
  );
};

export default Security;
