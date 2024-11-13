"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Otp() {
  const [boxValues, setBoxValues] = React.useState("");
  const [countdown, setCountdown] = useState(120); // 2 minutes in seconds
  const otp = parseInt(boxValues, 10);
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false when the image has loaded
  };
  console.log("otp", otp);
  useEffect(() => {
    if (!boxValues) return;
    if (boxValues.length === 4) {
      //   handleNext();
      console.log("This is the value");
    }
  }, [boxValues]);
  //handleNext
  const handleChange = (v: string) => setBoxValues(v);

  // Countdown timer effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [countdown]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };
  return (
    <div className="w-full md:min-h-screen h-auto">
      <div className="grid grid-cols-1 md:grid-cols-10">
        {/* Left Column (Form Section) */}
        <div className="w-full md:min-h-screen h-auto  col-span-1 md:col-span-4 flex flex-col">
          <div className="py-6 px-6 w-full border-b border-b-gray-200 flex items-center space-x-4">
            <Image
              src="/back.svg"
              width={20}
              height={10}
              alt="back"
              className="object-contain self-start"
            />
            <span>Back</span>
          </div>
          <div className="w-full md:h-full h-auto  px-6 md:px-10 lg:px-14 flex items-center justify-center  md:py-10 py-8">
            <div className="w-full md:h-full h-[60vh] max-w-sm lg:max-w-xl flex flex-col justify-between">
              {/* Logo */}
              <div className="w-32 md:w-40">
                <Image
                  src="/logo2.svg"
                  width={200}
                  height={100}
                  alt="logo"
                  className="object-contain self-start"
                />
              </div>

              <div className="w-full flex flex-col space-y-8 -mt-32 ">
                {/* Welcome Heading */}
                <div className="flex flex-col">
                  <h2 className="text-lg md:text-3xl font-sfprodb">
                    Enter OTP code
                  </h2>
                  <span className="text-[14px]">
                    Enter the 4-digit OTP that was sent to Iseoluwa@gmail.com
                  </span>
                </div>
                {/* Sign-In Form */}
                <form className="w-full flex flex-col lg:space-y-[72px] space-y-12 mt-0">
                  <InputOTPControlled onOtpChange={handleChange} />
                </form>
                <div className=" flex flex-col justify-end">
                  <div className="">
                    <div className="text-sm text-[#1D2939] flex item-center space-x-2">
                      <div className="flex items-center space-x-2 w-fit p-2 rounded-lg bg-[#E9F2FE]">
                        <Image
                          src="/otp.svg"
                          width={20}
                          height={20}
                          alt="logo"
                          className="object-contain self-start"
                        />
                        <span className="text-black text-sm font-semibold">
                          {`OTP expires in`}
                        </span>
                        <button
                          //   disabled={isResendingOtp || countdown > 0} // Disable until countdown finishes
                          //   onClick={handleResendOTP}
                          className={`text-opexa-blue font-bold underline bg-transparent border-none ${
                            countdown > 0 ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          {countdown > 0
                            ? `${formatTime(countdown)}`
                            : "Click to resend"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mb-14">
                <button className="w-full  p-4 text-white bg-[#007C4D] rounded-lg flex items-center justify-center text-[16px]">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Image/Background Section) */}
        <div className="w-full md:min-h-screen h-auto col-span-6 items-center justify-center">
          {/* This could contain an image or other content for larger screens */}
          {isLoading && (
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-pulse w-full h-full bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg" />
            </div>
          )}
          <div className="w-full h-full">
            <Image
              src="/welcomeback.svg"
              width={1000}
              height={1000}
              alt="welcomeback"
              className="object-contain"
              onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function InputOTPControlled({
  onOtpChange,
}: {
  onOtpChange: (v: string) => void;
}) {
  const [value, setValue] = React.useState<string>("");

  useEffect(() => {
    if (onOtpChange) {
      onOtpChange(value);
    }
  }, [value, onOtpChange]);

  return (
    <div className="space-y-2 w-full grid place-items-start">
      <InputOTP
        className=" gap-3"
        maxLength={4}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      >
        <InputOTPGroup className="justify-center h-16 w-16 mr-8">
          <InputOTPSlot
            index={0}
            className="w-full h-full text-[#D0D5DD] text-[45px] placeholder:text-[#D0D5DD] placeholder:text-[45px] focus:border-[#D8DEE6] focus:outline-[#D8DEE6] bg-[#F8FAFF] "
          />
        </InputOTPGroup>
        <InputOTPGroup className=" justify-center h-16 w-16 mr-8">
          <InputOTPSlot
            index={1}
            className="w-full h-full text-[#D0D5DD] text-[48px] placeholder:text-[#D0D5DD] placeholder:text-[45px] focus:border-[#D8DEE6] focus:outline-[#D8DEE6] bg-[#F8FAFF] "
          />
        </InputOTPGroup>
        <InputOTPGroup className="justify-center h-16  w-16 mr-8">
          <InputOTPSlot
            index={2}
            className="w-full h-full text-[#D0D5DD] text-[48px] placeholder:text-[#D0D5DD] placeholder:text-[45px] focus:border-[#D8DEE6] focus:outline-[#D8DEE6] bg-[#F8FAFF]"
          />
        </InputOTPGroup>
        <InputOTPGroup className="justify-center h-16 w-16">
          <InputOTPSlot
            index={3}
            className=" w-full h-full text-[#D0D5DD] text-[48px] placeholder:text-[#D0D5DD] placeholder:text-[45px]  focus:border-[#D8DEE6] focus:!outline-[#D8DEE6] bg-[#F8FAFF] "
          />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
