"use client";

import React from "react";
import { useRouter, redirect } from "next/navigation";

function WithOutAuth(Component: any) {
  const wrapper = (props: any) => {
    const router = useRouter();

    React.useLayoutEffect(() => {
      const user = localStorage.getItem("user");
      if (user) {
        redirect("/user-profile");
      }
    }, []);

    return <Component {...props} />;
  };

  return wrapper;
}
export default WithOutAuth;
