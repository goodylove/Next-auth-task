"use client";

import React from "react";

import WithOutAuth from "@/Components/WithOutAuth";
import Register from "@/Components/register";

function RegisterPage() {
  return <Register />
}
export default WithOutAuth(RegisterPage);
