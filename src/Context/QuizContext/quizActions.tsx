import axios from "axios";
import { Dispatch } from "react";
import { QuizType } from "../../assets/quiz-types/quiz-types";
import * as actionTypes from "../ActionTypes";
import { authActionsType, quizActionType } from "../ContextTypes";

export const addQuizData = (
  dispatch: Dispatch<quizActionType>,
  quizData: QuizType
) => {
  dispatch({ type: actionTypes.QUIZ_ADD_LOADING });
  if (quizData !== null) {
    dispatch({
      type: actionTypes.QUIZ_ADD_SUCCESS,
      quizData: quizData,
    });
  } else {
    dispatch({
      type: actionTypes.QUIZ_ADD_FAILED,
      error: "Cannot load quiz right now!Please try again later",
    });
  }
};

export const selectOptionAction = (
  dispatch: Dispatch<quizActionType>,
  quizData: QuizType,
  quesId: string,
  optionId: string
) => {
  console.log("select option start");
  let isCorrect = false;
  let points = 0;
  let updatedQuizData = {
    ...quizData,
    questions: quizData.questions.map((ques) => {
      if (ques._id === quesId) {
        return {
          ...ques,
          isAttempted: true,
          options: ques.options.map((option) => {
            if (option._id === optionId) {
              if (option.isRight) {
                isCorrect = true;
              }
              if (!option.isSelected) {
                points = isCorrect ? ques.points : ques.negativePoints;
              }

              return {
                ...option,
                isSelected: true,
              };
            }
            return { ...option, isSelected: false };
          }),
        };
      }
      return ques;
    }),
  };

  console.log("updated quiz data", updatedQuizData);

  updatedQuizData = {
    ...updatedQuizData,
    score: isCorrect
      ? updatedQuizData.score + points
      : updatedQuizData.score - points,
  };
  // console.log("updated quiz data 2", updatedQuizData);

  dispatch({ type: actionTypes.SELECT_OPTION, quizData: updatedQuizData });
};

export const finishQuiz = async (
  dispatch: Dispatch<quizActionType>,
  quizId: string,
  score: number
) => {
  try {
    const data = {
      score: score,
    };
    const uniqueAuthId = localStorage.getItem("uniqueAuthId");
    const userId = localStorage.getItem("userId");
    const response = await axios.post(`/quiz/result/${quizId}`, data, {
      headers: {
        Authorization: `Basic ${uniqueAuthId}`,
        userId: userId,
      },
    });
    if (response.data.success) {
      console.log(response.data);
    } else {
      console.log(response.data.message);
    }
  } catch (error) {
    console.log("catch error ", error);
  }
};
