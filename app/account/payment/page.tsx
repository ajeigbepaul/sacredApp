"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

const Payment = () => {
  const [tab, setTab] = useState(true);
  const [expire, setExpire] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false when the image has loaded
  };
  console.log(expire)
  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-10">
        {/* Left Column (Form Section) */}
        <div className="w-full min-h-screen  px-6 md:px-10 lg:px-10 col-span-1 md:col-span-4 flex items-center justify-center  md:py-8 py-8">
          <div className="w-full h-full max-w-sm lg:max-w-md flex flex-col space-y-8">
            <div className="w-32 md:w-40">
              <Image
                src="/ceelaLogo.svg"
                width={200}
                height={100}
                alt="logo"
                className="object-contain self-start"
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <h2 className="text-[#181818] font-sfprodb text-xl">
                Make payment
              </h2>
              <h2 className="underline font-sfprodm text-[#FF9807]">
                Change plan
              </h2>
            </div>
            <div className="w-full h-[2px] bg-gray-200 my-4" />
            {/* basic */}
            <div className="w-full flex flex-col">
              <div className="flex items-center justify-between">
                <div className="w-full flex items-center space-x-2">
                  <Image
                    src="/paymenticon.svg"
                    width={20}
                    height={10}
                    alt="paymenticon"
                    className="object-contain self-start"
                  />
                  <div className="flex flex-col">
                    <h2 className="text-sm font-sfprodb text-[#181818]">
                      Basic - Monthly
                    </h2>
                    <h2 className="text-[#828890] font-sfprodm text-sm">
                      Subscribsion for one month
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col justify-end">
                  <h2 className="text-sm font-sfprodb text-[#181818]">
                    $10.00
                  </h2>
                  <h2 className="text-[#828890] font-sfprodm text-sm">
                    /month
                  </h2>
                </div>
              </div>
              <div className="w-full flex flex-col space-y-2 my-4">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/dot.svg"
                    width={4}
                    height={4}
                    alt="dot"
                    className="object-contain"
                  />
                  <span className="text-[#828890] font-sfprodm text-sm">
                    Monthly billing starting today.
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/dot.svg"
                    width={4}
                    height={4}
                    alt="dot"
                    className="object-contain"
                  />
                  <span className="text-[#828890] font-sfprodm text-sm">
                    Monthly billing starting today.
                  </span>
                  <span className="text-[#FF9807] underline text-xs">
                    Term apply
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-[2px] bg-gray-200 my-4" />
            {/* Payment */}
            <div className="w-full flex flex-col space-y-4">
              {/* Welcome Heading */}
              <h2 className="text-sm md:text-lg font-sfprodb text-[#181818]">
                Payment method
              </h2>
              <div className="flex items-center space-x-2">
                <Image
                  src="/radio.svg"
                  width={20}
                  height={10}
                  alt="radioicon"
                  className="object-contain self-start"
                />
                <span className="text-[#828890] font-sfprodm text-sm">
                  Credit or debit card
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/master.svg"
                  width={70}
                  height={100}
                  alt="mastercardicon"
                  className="object-contain"
                />
                <Image
                  src="/verve.svg"
                  width={80}
                  height={100}
                  alt="vervecardicon"
                  className="object-contain"
                />
                <Image
                  src="/visa.svg"
                  width={80}
                  height={100}
                  alt="visacardicon"
                  className="object-contain"
                />
              </div>
              <div className="w-full gap-4 pt-10 flex items-start">
                <button
                  type="button"
                  onClick={() => setTab(true)}
                  className={cn(
                    "w-fit text-[#828890]  bg-transparent p-2 font-sfprodb",
                    {
                      "border-b-4 border-b-[#007C4D] text-[#181818] ": tab,
                    }
                  )}
                >
                  Saved Card
                </button>
                <button
                  type="button"
                  onClick={() => setTab(false)}
                  className={cn(
                    "w-fit bg-transparent text-[#828890] p-2 font-sfprodb",
                    {
                      "border-b-4 border-b-[#007C4D] text-[#181818]": !tab,
                    }
                  )}
                >
                  New Card
                </button>
              </div>
              {tab ? (
                <div className="w-full flex flex-col space-y-4">
                  <form className="w-full flex flex-col lg:space-y-[72px] space-y-12 mt-0">
                    <div className="w-full space-y-4 flex flex-col">
                      <div className="w-full bg-white border px-4 rounded-lg border-[#D9D9D9] flex items-center space-x-2">
                        <Image
                          src="/master.svg"
                          width={60}
                          height={100}
                          alt="mastercardicon"
                          className="object-contain"
                        />
                        <input
                          value={"*** *** *** 1234"}
                          className="p-4 w-full bg-white"
                          disabled
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col space-y-2">
                          <label className="text-[#181818] font-sfprodm">
                            Expire date
                          </label>
                          <div className="w-full border px-4 rounded-lg border-[#D9D9D9] flex items-center space-x-2">
                            <input
                              name="expire"
                              value={"01/28"}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => setExpire(e.target.value)}
                              className="p-4 w-full bg-white"
                              disabled
                            />
                          </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <label className="text-[#181818] font-sfprodm">
                            CVV
                          </label>
                          <div className="w-full border px-4 rounded-lg border-[#D9D9D9] flex items-center space-x-2">
                            <input
                              name="cvv"
                              value={cvv}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => setCvv(e.target.value)}
                              className="p-4 w-full bg-white"
                              disabled
                            />
                            <Image
                              src="/question.svg"
                              width={20}
                              height={20}
                              alt="mastercardicon"
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col">
                      <h2 className="text-sm md:text-lg font-sfprodb text-[#181818]">
                        Summary
                      </h2>
                      <div className="flex flex-col bg-[#F8FAFF] p-4 py-8">
                        <h2>Item</h2>
                        <div className="flex items-center justify-between">
                          <div className="w-full flex items-center space-x-2">
                            <Image
                              src="/paymenticon.svg"
                              width={20}
                              height={10}
                              alt="paymenticon"
                              className="object-contain self-start"
                            />
                            <div className="flex flex-col">
                              <h2 className="text-sm font-sfprodb text-[#181818]">
                                Basic plan per month
                              </h2>
                            </div>
                          </div>
                          <div className="flex flex-col justify-end">
                            <h2 className="text-sm font-sfprodb text-[#181818]">
                              $10.00/month
                            </h2>
                          </div>
                        </div>
                        <div className="w-full flex flex-col space-y-2 my-4">
                          <div className="flex items-center justify-between">
                            <h2 className="text-sm font-sfprodb text-[#181818]">
                              Total Now
                            </h2>

                            <h2 className="text-sm font-sfprodb text-[#181818]">
                              NGN 1,300.00
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="text-sm font-sfprodm text-[text-[#828890]]">
                    You hereby authorise SacredEyes to charge you automatically
                    every month until you cancel your subscription. Full terms
                    are available <span className="text-[#FF9807]">here.</span>
                  </div>
                  <button className="w-full p-4 text-white bg-[#007C4D] rounded-lg flex items-center justify-center text-[16px]">
                    Complete Purchase
                  </button>
                </div>
              ) : (
                <div>Coming soon</div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column (Image/Background Section) */}
        <div className="w-full min-h-screen col-span-6 items-center justify-center">
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
};

export default Payment;
