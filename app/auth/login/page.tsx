"use client"

import WithOutAuth from "@/Components/WithOutAuth";
import Login from "@/Components/login";
import React from "react";

function LoginPage() {
  return <Login />;
}

export default WithOutAuth(LoginPage);
