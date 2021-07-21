import * as actionTypes from "../ActionTypes";
import axios from "axios";
import React, { Dispatch } from "react";
import { authActionsType } from "../ContextTypes";

export const logInUser = async (
  dispatch: Dispatch<authActionsType>,
  email: string,
  password: string
) => {
  try {
    const data = {
      email,
      password,
    };
    dispatch({ type: actionTypes.AUTH_LOADING });
    const response = await axios.post("/login", data);
    if (response.status === 200) {
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        uniqueAuthId: response.data.authToken,
        userId: response.data.userId,
      });
      console.log("uniqueAuthId", response.data.authToken);
      localStorage.setItem("uniqueAuthId", response.data.authToken);
      localStorage.setItem("userId", response.data.userId);
    } else {
      console.log("error-message", response.data.message);
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: actionTypes.AUTH_FAILED,
      error: error.response.data.message,
    });
  }
};

export const logoutUser = (dispatch: Dispatch<authActionsType>) => {
  dispatch({
    type: actionTypes.AUTH_LOGOUT,
  });
  localStorage.removeItem("uniqueAuthId");
  localStorage.removeItem("userId");
};
