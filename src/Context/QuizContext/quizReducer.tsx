import React from "react";
import * as actionTypes from "../ActionTypes";
import { quizActionType, quizStateType } from "../ContextTypes";

const quizReducer = (
  state: quizStateType,
  action: quizActionType
): quizStateType => {
  switch (action.type) {
    case actionTypes.QUIZ_ADD_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case actionTypes.QUIZ_ADD_SUCCESS:
      return {
        ...state,
        status: "quizSuccess",
        quizData: action.quizData,
      };
    case actionTypes.QUIZ_ADD_FAILED:
      return {
        ...state,
        status: "quizFailed",
        error: action.error,
      };
    case actionTypes.SELECT_OPTION:
      return {
        ...state,
        status: "quizSuccess",
        quizData: action.quizData,
      };
    default:
      return state;
  }
};

export default quizReducer;
