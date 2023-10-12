"use client";

import React from "react";

import WithOutAuth from "@/Components/WithOutAuth";
import Login from "@/Components/login";

function LoginPage() {
  return <Login />;
}

export default WithOutAuth(LoginPage);
