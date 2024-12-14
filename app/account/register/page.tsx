"use client";
import Inputs from "@/components/Inputs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SignUp = () => {
  // Updated state to include new fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phonenos: "",
    confirmPassword: "",
    country: "",
    state: "",
    userRole: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false when the image has loaded
  };
  // Define user roles
  const USER_ROLES = ["Household/Parent", "Organization", "University Admin"];

  // Define a basic list of countries (you might want to expand this)
  const COUNTRIES = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    // Add more countries as needed
  ];
  // Define a basic list of states for the US (you can expand or make dynamic)
  const US_STATES = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    // Add more states
  ];
  // Generic handler for form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-10">
        {/* Left Column (Form Section) */}
        <div className="w-full min-h-screen  px-6 md:px-10 lg:px-20 col-span-1 md:col-span-4 flex items-center justify-center  md:py-8 py-8">
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
                Create account
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
              <form className="w-full flex flex-col lg:space-y-[40px] space-y-12 mt-0">
                <div className="w-full flex flex-col space-y-8">
                  {/* New Full Name Input */}
                  <Inputs
                    name="fullName"
                    type="text"
                    label="Full Name"
                    placeholderText="Enter your full name"
                    value={formData.fullName}
                    handleChange={handleInputChange}
                    styleClass="p-2 md:p-2 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF]"
                  />

                  {/* Email Input */}
                  <Inputs
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholderText="Enter your email"
                    value={formData.email}
                    handleChange={handleInputChange}
                    styleClass="p-2 md:p-2 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF]"
                  />
                </div>
                {/* Phone number */}
                <Inputs
                  name="phonenos"
                  type="text"
                  label="Phone number"
                  placeholderText="Enter your Phone number"
                  value={formData.phonenos}
                  handleChange={handleInputChange}
                  styleClass="p-2 md:p-2 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF]"
                />
                {/* Country Dropdown */}
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="p-2 md:p-2 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF]"
                  >
                    <option value="">Select Country</option>
                    {COUNTRIES.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                {/* State Dropdown */}
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="p-2 md:p-2 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF]"
                  >
                    <option value="">Select State</option>
                    {US_STATES.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                {/* User Role Dropdown */}
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    User Role
                  </label>
                  <select
                    name="userRole"
                    value={formData.userRole}
                    onChange={handleInputChange}
                    className="p-2 md:p-2 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF]"
                  >
                    <option value="">Select User Role</option>
                    {USER_ROLES.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Password Inputs */}
                <Inputs
                  name="password"
                  type="password"
                  label="Password"
                  placeholderText="Create a password"
                  value={formData.password}
                  handleChange={handleInputChange}
                  styleClass="p-2 md:p-2 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF]"
                />
                <Inputs
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholderText="Rewrite password"
                  value={formData.confirmPassword}
                  handleChange={handleInputChange}
                  styleClass="p-2 md:p-2 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF]"
                />

                <button className="w-full p-4 text-white bg-[#007C4D] rounded-lg flex items-center justify-center text-[16px]">
                  Sign up
                </button>
              </form>

              {/* Sign-Up Link */}
              <div className="w-full flex space-x-2 items-center justify-center">
                <h2 className="text-[16px] font-sfprodm text-[#1D1D1DCC]">
                  Already have an account?
                </h2>
                <Link
                  href="/"
                  className="text-[16px] font-sfprodm text-[#007C4D]"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Image/Background Section) */}
        <div className="w-full min-h-screen col-span-6 items-center justify-center">
          <div className="w-full h-full">
            {/* This could contain an image or other content for larger screens */}
            {isLoading && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-pulse w-full h-full bg-gradient-to-r from-gray-300 to-gray-200 rounded-lg" />
              </div>
            )}
            <Image
              src="/welcomback.png"
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

export default SignUp;
