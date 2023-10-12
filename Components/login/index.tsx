"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { ChangeEvent } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "../Button";

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
      <section className="flex justify-center  w-full  items-center h-screen  bg-[#216D5B]  px-3">
        <div className="w-[400px] flex  justify-center ">
          <form
            onSubmit={handleLogin}
            className=" max-h-[400px]  gap-1 w-[100%]  mt-20 rounded-md  py-2 px-3  justify-center items-center  flex flex-col  border-[1px]  shadow-2xl"
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
                className="p-2 rounded w-full text-black outline-none"
              />
            </div>

            <div className="flex flex-col gap-1  w-full py-1">
              <label htmlFor="password" className="font-Inter">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                className="p-2 rounded w-full text-black outline-none"
              />
            </div>

            <Button className="bg-black w-full p-2 mt-5 rounded font-Inter text-[15px] font-[800]   text-[#fff]">
              Login
            </Button>

            <p className="flex text-center w-full justify-center py-2 mt-2 text-[12px]">
              Don't have an account ?
              <Link href="/auth/register" className="pl-1 hover:underline">
                {" "}
                Register{" "}
              </Link>
            </p>
          </form>
        </div>
      </section>
      <ToastContainer position="top-right" />
    </>
  );
}
