"use client";
import Inputs from "@/components/Inputs";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "sonner";
import { signIn, useSession } from "next-auth/react";
// import Cookies from "js-cookie";

const Welcome = () => {
  const { data: session} = useSession();
  const router = useRouter();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn] = useState(false);
  // const handleImageLoad = () => {
  //   setIsLoading(false); // Set loading to false when the image has loaded
  // };

  // Debounced input change handler
  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      setIsEmailValid(true);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setIsPasswordValid(true);
    },
    []
  );

  const handleEyeClick = useCallback(() => {
    setPasswordVisible((prevState) => !prevState);
  }, []);
  // interface UserData {
  //   id: string;
  //   name: string;
  //   email: string;
  //   token: string;
  // }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "bottom-right",
      });
      setIsEmailValid(false);
      return;
    }
    if (!password || password.trim() === "") {
      toast.error("Password cannot be empty", { position: "bottom-right" });
      setIsPasswordValid(false);
      return;
    }
    setIsLoading(true);
    const options = {
      redirect: false,
      email: email,
      password: password,
    };

    try {
      const res = await signIn("credentials", options);
      console.log(res);
      if (res?.ok) {
        toast.success("Logged in successfully!", {
          position: "bottom-right",
        });
        router.replace("/dashboard");
      } else if (res?.error === "CredentialsSignin") {
        toast.error("User does not exist!", {
          position: "bottom-right",
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error, "error from try catch");
    }
  };

  // Ensure all hooks are called before any returns
  if (session) {
    router.push("/dashboard");
    return null; // Prevent rendering anything else
  }

  return (
    <div className="w-full min-h-screen">
      {isLoading && <div>Loading...</div>} {/* Show loading state */}
      <div className="grid grid-cols-1 md:grid-cols-10">
        {/* Left Column (Form Section) */}
        <div className="w-full min-h-screen  px-6 md:px-10 lg:px-20 col-span-1 md:col-span-4 flex items-center justify-center bg-white  md:py-12 py-8">
          <div className="w-full h-full max-w-sm lg:max-w-md flex flex-col space-y-8">
            <div className="w-32 md:w-40">
              <Image
                src="/logo2.svg"
                width={200}
                height={100}
                alt="logo"
                className="object-contain self-start"
              />
            </div>
            <div className="w-full flex flex-col space-y-8 pt-10">
              {/* Welcome Heading */}
              <h2 className="text-lg md:text-3xl font-sfprodb">
                Welcome back! 👋
              </h2>

              {/* Google Sign-In Button */}
              <button className="w-full p-2 md:p-4 border border-[#D8DEE6] rounded-lg flex items-center justify-center space-x-2">
                <Image
                  src="/google.svg"
                  width={20}
                  height={20}
                  alt="Google icon"
                  className="object-contain"
                />
                <span className="text-xs md:text-[16px] font-sfprodm">
                  Sign in with Google
                </span>
              </button>

              {/* Divider */}
              <div className="w-full flex items-center space-x-2 justify-center">
                <div className="w-1/5 h-px bg-gray-100" />
                <span className="text-sm font-sfprodm">Or</span>
                <div className="w-1/5 h-px bg-gray-100" />
              </div>

              {/* Sign-In Form */}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col lg:space-y-32 space-y-12 mt-10"
              >
                <div className="w-full space-y-8 flex flex-col">
                  <Inputs
                    disabled={isLoading || isLoggedIn}
                    name="email"
                    type="email"
                    // isValid={isEmailValid}
                    label="Email Address"
                    placeholderText="Enter your email"
                    value={email}
                    handleChange={handleEmailChange}
                    styleClass={`p-2 md:p-4 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF] ${
                      isEmailValid
                        ? "border-[#10182877]"
                        : "ring-red-500 border-red-500"
                    }`}
                  />
                  <div className="relative flex justify-center items-center w-full">
                    <Inputs
                      disabled={isLoading || isLoggedIn}
                      name="password"
                      type={passwordVisible ? "text" : "password"}
                      label="Password"
                      placeholderText="Create a password"
                      value={password}
                      handleChange={handlePasswordChange}
                      styleClass={`p-2 md:p-4 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF] ${
                        isPasswordValid
                          ? "border-[#10182877]"
                          : "ring-red-500 border-red-500"
                      }`}
                    />
                    <div className="top-12 right-2 lg:right-4 absolute cursor-pointer">
                      {passwordVisible ? (
                        <IoMdEyeOff color="gray" onClick={handleEyeClick} />
                      ) : (
                        <IoMdEye color="gray" onClick={handleEyeClick} />
                      )}
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full p-4 text-white bg-[#007C4D] rounded-lg flex items-center justify-center text-[16px]"
                >
                  {isLoading ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <Spinner size="md" />
                    </div>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </form>

              {/* Sign-Up Link */}
              <div className="w-full flex space-x-2 items-center justify-center">
                <h2 className="text-[16px] font-sfprodm text-[#1D1D1DCC]">
                  {`Don’t have an account?`}
                </h2>
                <Link
                  href="/account/register"
                  className="text-[16px] font-sfprodm text-[#007C4D]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Image/Background Section) */}
        <div className="w-full h-screen col-span-6 items-center justify-center">
          {/* This could contain an image or other content for larger screens */}
          <div className="w-full h-full">
            {isLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-pulse w-full h-full bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg" />
              </div>
            ) : (
              <Image
                src="/welcomback.png"
                width={1000}
                height={1000}
                alt="welcomeback"
                className="object-cover"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
