import React from "react";
import Button from "./../Button/index";
import { RegisterIcon } from "@/public/SVG";

export default function Register() {
  return (
    <section className="flex justify-center items-center w-full  h-screen fixed">
      <div className="w-[80%] flex justify-center items-center">
        <RegisterIcon />
        <form className=" h-[400px]  gap-3 w-[400px] rounded   justify-center items-center  flex flex-col p-4  border-[1px] border-[#d434fe] shadow-2xl ">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-Inter">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="p-2 rounded w-[350px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-Inter">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email"
              className="p-2 rounded w-[350px]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-Inter">
              Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              className="p-2 rounded w-[350px]"
            />
          </div>

          <Button className="   text-white w-[300px] p-2 mt-5 rounded font-Inter    bg-button-gradient">
            Register
          </Button>

          <p className="flex text-center w-full justify-center my-4">
            Already have an acount? Login
          </p>
        </form>
      </div>
    </section>
  );
}
