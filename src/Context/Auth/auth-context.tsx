import React, { createContext, useReducer } from "react";
import authReducer from "./authReducer";
import { authActionsType, authStateType } from "../ContextTypes";

const AuthContext = createContext<{
  authState: authStateType;
  authDispatch: React.Dispatch<authActionsType>;
} | null>(null);

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const initialState = {
    status: "normal",
    uniqueAuthId: null,
    userId: null,
  };
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider
      value={{ authState, authDispatch }}
    ></AuthContext.Provider>
  );
};
