"use client";
import Inputs from "@/components/Inputs";
import Spinner from "@/components/Spinner";
// import { FormContext } from "@/contextapi/FormContext";
import { Otp } from "@/services/api/auth";
import { apiService } from "@/services/apiServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useCallback } from "react";
import { toast } from "sonner";

const SignUp = () => {
  const router = useRouter();
  const { data: d } = useQuery({
    queryKey: ["getCountries"],
    queryFn: () =>
      apiService.getCountries({
        headers: {
          "x-crypto-key":
            "7087128fd6540d3b4a56481c81084256b31a92dc2cee418ea6c41b9009496cd346460c94db406ac884336fd5f829c407a084f8ac4acd1b273290c1d4e7aeb9a9",
          "x-sacredeyes": "Startup",
        },
      }),
    refetchOnMount: true,
    retry: 3,
  });
  const { data: roles } = useQuery({
    queryKey: ["getRoles"],
    queryFn: () =>
      apiService.getRoles({
        headers: {
          "x-crypto-key":
            "7087128fd6540d3b4a56481c81084256b31a92dc2cee418ea6c41b9009496cd346460c94db406ac884336fd5f829c407a084f8ac4acd1b273290c1d4e7aeb9a9",
          "x-sacredeyes": "Startup",
        },
      }),
    refetchOnMount: true,
    retry: 3,
  });

  // Define the props for the MultiStepForm component

  const { mutateAsync, isPending } = useMutation({
    mutationFn: Otp,
    onSuccess: () => {
      // sessionStorage.setItem("otpData", JSON.stringify(data));
      //send google analytics data
      router.replace("/account/otp");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "An error occurred", {
        position: "bottom-right",
        dismissible: true,
      });
    },
  });

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
  const [currentStep, setCurrentStep] = useState(1); // New state to track the current step
  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1); // Move to the next step
  };
  const [selC, setSelC] = useState(null);

  const [states, setStates] = useState<string[]>([]); // State to hold the states based on selected country
 
  // Generic handler for form input changes
  const handleInputChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const selectedCountryId = value;

      // Check if the changed field is the country
      if (name === "country") {
        const selectedCountry = d?.data?.find(
          (country: any) => country._id === selectedCountryId
        );
        setSelC(selectedCountry?.name);
      }
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      // Fetch states if the country is selected
      if (name === "country" && value) {
        try {
          const response = await apiService.getStates(value, {
            headers: {
              "x-crypto-key":
                "7087128fd6540d3b4a56481c81084256b31a92dc2cee418ea6c41b9009496cd346460c94db406ac884336fd5f829c407a084f8ac4acd1b273290c1d4e7aeb9a9",
              "x-sacredeyes": "Startup",
            },
          });
          setStates(response?.data?.states); // Assuming response.data contains the states array
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      }
    },
    [d] // Dependency array
  );

  // const validateFormData = (data: any) => {
  //   const {
  //     full_name,
  //     email,
  //     phone_number,
  //     password,
  //     user_role,
  //     country,
  //     state,
  //   } = data;
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  //   const phoneRegex = /^\d{10}$/; // Assuming phone number should be 10 digits

  //   return (
  //     full_name.trim() !== "" &&
  //     user_role.trim() !== "" &&
  //     country.trim() !== "" &&
  //     state.trim() !== "" &&
  //     emailRegex.test(email) &&
  //     phoneRegex.test(phone_number) &&
  //     password.length >= 6 && // Minimum password length
  //     password === formData?.confirmPassword
  //   );
  // };

  const handleNext = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const submitForm = {
        full_name: formData?.fullName,
        phone_number: formData?.phonenos,
        country: selC,
        state: formData?.state,
        user_role: formData?.userRole,
        email: formData?.email,
        password: formData?.password,
        address: "house 12, Ikorodu rd,Lagos.",
      };
      // const isValid = validateFormData(submitForm);
      // if (!isValid) {
      //   toast.error("Please fill in all required fields correctly.", {
      //     position: "bottom-right",
      //     dismissible: true,
      //   });
      //   return;
      // }
      // console.log("FormSubmitted", submitForm);
      try {
        sessionStorage.setItem("otpData", JSON.stringify(submitForm));
        await mutateAsync(formData?.email);
      } catch (error) {
        console.log(error);
      }
    },
    [formData, mutateAsync] // Dependency array
  );
  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-10">
        {/* Left Column (Form Section) */}
        <div className="w-full min-h-screen  px-6 md:px-10 lg:px-20 col-span-1 md:col-span-4 flex items-center justify-center  md:py-8 py-8">
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
              <form
                className="w-full flex flex-col lg:space-y-[40px] space-y-12 mt-0"
                onSubmit={
                  currentStep === 2
                    ? handleNext
                    : (e) => {
                        e.preventDefault();
                        handleNextStep();
                      }
                } // Handle next step or submit
              >
                {currentStep === 1 && (
                  <>
                    {/* First Part of the Form */}
                    <Inputs
                      name="fullName"
                      type="text"
                      label="Full Name"
                      placeholderText="Enter your full name"
                      value={formData.fullName}
                      handleChange={handleInputChange}
                      styleClass="p-2 md:p-2 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF]"
                    />
                    <Inputs
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholderText="Enter your email"
                      value={formData.email}
                      handleChange={handleInputChange}
                      styleClass="p-2 md:p-2 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF]"
                    />
                    <Inputs
                      name="phonenos"
                      type="text"
                      label="Phone number"
                      placeholderText="Enter your Phone number"
                      value={formData.phonenos}
                      handleChange={handleInputChange}
                      styleClass="p-2 md:p-2 placeholder:text-[16px] rounded-lg w-full bg-[#F8FAFF]"
                    />
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full p-4 text-white bg-[#007C4D] rounded-lg flex items-center justify-center text-[16px]"
                    >
                      Next
                    </button>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    {/* Second Part of the Form */}
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
                        {d?.data?.map((country: any) => (
                          <option key={country?._id} value={country?._id}>
                            {country?.name}
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
                        {states?.map((state: any) => (
                          <option key={state?._id} value={state?.name}>
                            {state?.name}
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
                        {roles?.data?.map((role: any) => (
                          <option key={role?._id} value={role?._id}>
                            {role?.name}
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
                    <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)} // Go back to the first step
                      className="w-full p-4 text-[#007C4D] border-2 border-[#007C4D] rounded-lg flex items-center justify-center text-[16px] mr-2"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-full p-4 text-white bg-[#007C4D] rounded-lg flex items-center justify-center text-[16px]"
                    >
                      {isPending ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <Spinner size="md" />
                        </div>
                      ) : (
                        "Sign up"
                      )}
                    </button>
                  </div>
                  </>
                )}
              </form>
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-full rounded-full ${
                    currentStep === 1
                      ? "bg-[#007C4D] w-1/2"
                      : "bg-[#007C4D] w-full"
                  }`}
                />
              </div>
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
            <Image
              src="/welcomback.png"
              width={1000}
              height={1000}
              alt="welcomeback"
              className="object-contain"
              loading="lazy"
              // onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
