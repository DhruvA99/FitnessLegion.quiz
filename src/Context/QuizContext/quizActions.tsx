import { Dispatch } from "react";
import { QuizType } from "../../assets/quiz-types/quiz-types";
import * as actionTypes from "../ActionTypes";
import { authActionsType, quizActionType } from "../ContextTypes";

export const addQuizData = (
  dispatch: Dispatch<quizActionType>,
  quizData: QuizType
) => {
  dispatch({ type: actionTypes.QUIZ_LOADING });
  if (quizData !== null) {
    dispatch({
      type: actionTypes.QUIZ_SUCCESS,
      quizData: quizData,
    });
  } else {
    dispatch({
      type: actionTypes.QUIZ_FAILED,
      error: "Cannot load quiz right now!Please try again later",
    });
  }
};
