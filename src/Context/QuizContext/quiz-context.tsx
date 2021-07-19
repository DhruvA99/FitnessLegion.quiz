import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { quizActionType, quizStateType } from "../ContextTypes";
import quizReducer from "./quizReducer";

export const quizContext = createContext<{
  quizState: quizStateType;
  quizDispatch: React.Dispatch<quizActionType>;
}>({
  quizState: {
    status: "loading",
    quizData: null,
    totalScore: 0,
    error: null,
  },
  quizDispatch: () => {},
});

export const QuizProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const initialState: quizStateType = {
    status: "loading",
    quizData: null,
    totalScore: 0,
    error: null,
  };
  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);
  return (
    <quizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </quizContext.Provider>
  );
};

export const useQuiz = () => useContext(quizContext);
