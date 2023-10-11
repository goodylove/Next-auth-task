"use client"

import WithOutAuth from "@/Components/WithOutAuth";
import Register from "@/Components/register";
import React from "react";

function RegisterPage() {
  return (
    <>
      <Register />
    </>
  );
}
export default WithOutAuth(RegisterPage);
