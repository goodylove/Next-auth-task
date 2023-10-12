"use client";

import React from "react";

import WithAuth from "@/Components/WithAuth";
import Button from "./../../Components/Button/index";
import { useRouter } from "next/navigation";
import UserImg from "@/public/user-2.jpg";
import Image from "next/image";

function UserProfile() {
  const router = useRouter();

  let getUser;

  if (typeof window !== "undefined") {
    const userInfo = localStorage.getItem("user");
    if (userInfo !== null) {
      getUser = JSON.parse(userInfo);
    }
  }

  const handleLogOut = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#216D5B] ">
      <div className="flex justify-center flex-col items-center gap-4">
        <Image
          src={UserImg}
          alt="user-image"
          className="h-42 w-42 rounded-full  object-cover "
        />
        <h2> Name: {getUser?.name}</h2>
        <h2> Email: {getUser?.email}</h2>
        <Button
          className="bg-white w-full p-2 mt-5 rounded font-Inter text-[#216D5B] font-[400] text-[14px]"
          onClick={handleLogOut}
        >
          Logout
        </Button>
      </div>
    </div>
  );
}

export default WithAuth(UserProfile);
