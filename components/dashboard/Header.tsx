import { apiService } from "@/services/apiServices";
import { useQuery } from "@tanstack/react-query";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { debounce } from "lodash"; // Import debounce from lodash

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);
  const { data: user } = useQuery({
    queryKey: ["getUsers"],
    queryFn: () => apiService.getUsers(),
    refetchOnMount: true,
    retry: 3,
  });
  console.log(user, "User Active");
  console.log(session, "UserSession");
  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Debounce the search input
  const handleSearchChange = debounce((value: string) => {
    setSearchTerm(value);
  }, 300); // Adjust debounce time as needed

  return (
    <div className="w-full px-10 flex items-center justify-between">
      <div className="w-[fit] px-4 rounded-lg flex items-center bg-[#F8F8F8] relative">
        <Image src={"/search.svg"} width={20} height={20} alt="search" />
        <input
          className="p-3 w-full bg-[#F8F8F8] border-none outline-none"
          placeholder="Search or type a word"
          onChange={(e) => handleSearchChange(e.target.value)} // Use debounced function
        />
      </div>
      <div className="w-fit flex items-center space-x-8">
        <Image src={"/bell.svg"} width={40} height={40} alt="bell"/>
        {session &&
          user && ( // Conditional rendering
            <div className="w-fit flex items-center space-x-2 justify-center">
              <Image
                src={"/avatar.svg"}
                width={40}
                height={40}
                alt="avatar"
                className="object-contain cursor-pointer"
                onClick={handleLogout}
              />
              <div className="flex flex-col">
                <h2 className="text-sm font-semibold">
                  {session.user.full_name}
                </h2>
                <span className="text-xs">{session.user.email}</span>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Header;
