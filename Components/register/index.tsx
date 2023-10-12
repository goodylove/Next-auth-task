"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, redirect } from "next/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "./../Button/index";
import { CurrentUserProps } from "@/types";

export default function Register() {
  const [formatData, setFormData] = React.useState<CurrentUserProps>({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const notify = () => toast.error("please enter correct email");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setFormData({ ...formatData, [e.target.name]: value });
  };

  const handleSUbmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (
      formatData.email === "" ||
      formatData.password === "" ||
      formatData.name === ""
    ) {
      return notify();
    }

    localStorage.setItem("user", JSON.stringify(formatData));
    router.push("/auth/login");
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <section className="flex justify-center  w-full  items-center h-screen  px-3 bg-[#fff]  ">
        <div className="w-[500px] flex  flex-col justify-center">
          <form
            onSubmit={handleSUbmit}
            className=" max-h-[400px]   mt-20 gap-2  w-[100%]  rounded-md  py-2 px-3  justify-center items-center  flex flex-col   border-[1px] shadow-2xl  bg-[#216D5B] "
          >
            <div className="flex flex-col gap-1 w-full py-2">
              <label htmlFor="name" className="font-Inter">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formatData.name}
                placeholder="Enter Name"
                className="p-2 rounded w-full text-black  outline-none"
                onChange={handleOnChange}
              />
            </div>

            <div className="flex flex-col gap-1 w-full py-2">
              <label htmlFor="email" className="font-Inter">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formatData.email}
                placeholder="Enter Email"
                className="p-2 rounded w-full text-black  outline-none"
                onChange={handleOnChange}
              />
            </div>

            <div className="flex flex-col gap-1  w-full py-2">
              <label htmlFor="password" className="font-Inter">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formatData.password}
                onChange={handleOnChange}
                name="password"
                className="p-2 rounded w-full text-black  outline-none"
              />
            </div>

            <Button className="bg-black w-full p-2 mt-5 rounded font-Inter font-[800] text-[14px]  text-[#fff]">
              Register
            </Button>

            <p className="flex text-center w-full justify-center py-2 text-[12px]">
              Already have an acount ?{" "}
              <Link href="/auth/login" className="pl-1 hover:underline">
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
      <ToastContainer position="top-right" />
    </>
  );
}
