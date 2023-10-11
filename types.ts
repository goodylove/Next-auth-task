import { ReactComponentElement } from "react";

export type ButtonProps = {
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
};

export type CurrentUserProps = {
  name: string;
  email: string;
  password: string;
};

export type AppContextProps = {
  currentUser: boolean;
  handleRegister: (user: CurrentUserProps) => void;
  handleLogin: (email: string, password: string) => void;
};
