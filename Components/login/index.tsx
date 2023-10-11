"use client";

import React, { ChangeEvent } from "react";

import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../Button";

import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const notify = () => toast.error("incorrect email or password");
  const router = useRouter();

  const handleLogin = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || password === "") {
      return notify();
    }

    const localStorageValue: string | null = localStorage.getItem("user");

    if (localStorageValue !== null) {
      try {
        let userDetails = JSON.parse(localStorageValue);
        if (userDetails.password === password && userDetails.email === email) {
          console.log("correct password");
          router.push("/user-profile");
        } else {
          console.log("incorrect password");
          notify();
        }
      } catch (error) {
        console.error("Error parsing user details from localStorage:", error);
      }
    }
  };
  return (
    <>
      <section className="flex justify-center  w-full  items-center h-screen  bg-[#216D5B] ">
        <div className="w-[350px] flex justify-center ">
          <form
            onSubmit={handleLogin}
            className=" max-h-[400px]  gap-1 w-[100%]  mt-20 rounded-md  py-2 px-3  justify-center items-center  flex flex-col   border-[0.1px] border-[#d434fe] shadow-2xl"
          >
            <div className="flex flex-col gap-1 w-full py-1">
              <label htmlFor="email" className="font-Inter">
                Email
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Enter Email"
                className="p-2 rounded w-full text-black"
              />
            </div>

            <div className="flex flex-col gap-1  w-full py-1">
              <label htmlFor="password" className="font-Inter">
                Password
              </label>
              <input
                type="text"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="p-2 rounded w-full text-black"
              />
            </div>

            <Button className="bg-white w-full p-2 mt-5 rounded font-Inter   text-[#216D5B]">
              Login
            </Button>

            <p className="flex text-center w-full justify-center py-2">
              Don't have an account ?
              <Link href="/auth/register"> Register </Link>
            </p>
          </form>
        </div>
      </section>
      <ToastContainer position="top-right" />
    </>
  );
}
