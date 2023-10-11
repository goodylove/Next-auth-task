// "use client";

// import { AppContextProps, ThemeProviderProps } from "@/types";
// import React, { createContext } from "react";

// import { CurrentUserProps } from "@/types";

// export const ThemeContext = createContext<AppContextProps | null>(null);

// export const ThemeProvider = ({ children }: ThemeProviderProps) => {
//   const [currentUser, setCureentUser] = React.useState(false);

//   React.useEffect(() => {
//     const user = localStorage.getItem("user");

//     if (user) {
//       setCureentUser(true);
//     } else {
//       setCureentUser(false);
//     }
//   }, []);

//   const handleLogin = (email: string, password: string) => {
//     const localStorageValue: string | null = localStorage.getItem("user");

//     if (localStorageValue !== null) {
//       try {
//         let userDetails = JSON.parse(localStorageValue);
//         if (userDetails.email === email && userDetails.password === password) {
//           setCureentUser(true);
//         } else {
//           setCureentUser(false);
//         }
//       } catch (error) {
//         console.error("Error parsing user details from localStorage:", error);
//       }
//     }
//   };

//   const handleRegister = (user: CurrentUserProps) => {
//     localStorage.setItem("user", JSON.stringify(user));
//   };

//   return (
//     <ThemeContext.Provider value={{ currentUser, handleRegister, handleLogin }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
