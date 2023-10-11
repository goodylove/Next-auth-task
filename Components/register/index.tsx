import React from "react";
import Button from "./../Button/index";
import Image from "next/image";
import RegisterIcon from "@/public/register.svg";

export default function Register() {
  return (
    <section className="flex justify-center  w-full   ">
      <div className="w-[80%] lg:flex  items-center  flex-cols-reverse justifty-around">
        <Image
          src={RegisterIcon}
          alt="icon"
          className="md:w-[600px] w-[500px]"
        />
        <form className=" max-h-[400px]  gap-2  md:w-[350px]  rounded  py-2 px-3  justify-center items-center  flex flex-col   border-[1px] border-[#d434fe] shadow-2xl ">
          <div className="flex flex-col gap-1 w-full py-2">
            <label htmlFor="name" className="font-Inter">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="p-2 rounded w-full"
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
              placeholder="Enter Email"
              className="p-2 rounded w-full"
            />
          </div>

          <div className="flex flex-col gap-1  w-full py-2">
            <label htmlFor="password" className="font-Inter">
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className="p-2 rounded w-full"
            />
          </div>

          <Button className="   text-white w-full p-2 mt-5 rounded font-Inter    bg-button-gradient">
            Register
          </Button>

          <p className="flex text-center w-full justify-center py-2">
            Already have an acount? Login
          </p>
        </form>
      </div>
    </section>
  );
}
