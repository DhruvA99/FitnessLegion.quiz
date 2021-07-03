import React, { createContext, useContext, useReducer } from "react";
import authReducer from "./authReducer";
import { authActionsType, authStateType } from "../ContextTypes";

const AuthContext = createContext<{
  authState: authStateType;
  authDispatch: React.Dispatch<authActionsType>;
}>({
  authState: {
    status: "normal",
    uniqueAuthId: null,
    userId: null,
    error: null,
  },
  authDispatch: () => {},
});

export const AuthProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const initialState = {
    status: "normal",
    uniqueAuthId: null,
    userId: null,
    error: null,
  };
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
