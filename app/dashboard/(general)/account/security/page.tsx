"use client";
import Spinner from "@/components/Spinner";
import resetPassword from "@/services/api/security";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const Security = () => {
  const router = useRouter();
  const [currentpassword, setCurrentPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");
  const { mutateAsync, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: async () => {
      toast.success("Your password has been reset successfully", {
        position: "bottom-right",
        dismissible: true,
      });
      await signOut({ redirect: false });
      router.push("/");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "An error occurred", {
        position: "bottom-right",
        dismissible: true,
      });
    },
  });
  const handleReset = async () => {
    console.log({ currentpassword, newpassword });
    try {
      if (newpassword !== repeatpassword)
        throw new Error("Passwords do not match");
      await mutateAsync({
        current_password: currentpassword,
        new_password: newpassword,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col space-y-4 bg-white rounded-lg p-4">
      <div className="flex flex-col space-y-1">
        <h1 className="text-lg font-sfprodb text-[#181818]">Security</h1>
        <h6 className="text-sm font-sfprodm text-[#828890]">
          Change password and update password
        </h6>
      </div>
      <div className="h-[50vh]">
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
        onClick={handleReset}
        className={`px-4 w-full rounded-lg p-2 text-xs font-sfprodm bg-[#007C4D] text-white`}
      >
        {isPending ? (
          <div className="w-full h-full flex items-center justify-center">
            <Spinner size="md" />
          </div>
        ) : (
          "Update Passoword"
        )}
      </button>
    </div>
  );
};

export default Security;
