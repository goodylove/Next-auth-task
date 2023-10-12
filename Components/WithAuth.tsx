"use client";

import { redirect } from "next/navigation";

import React from "react";

const WithAuth = (Component: any) => {
  const wrapper = (props: any) => {
    React.useLayoutEffect(() => {
      const user = localStorage.getItem("user");
      if (!user) {
        redirect("/auth/login");
      }
    }, []);

    return <Component {...props} />;
  };

  return wrapper;
};

export default WithAuth;
