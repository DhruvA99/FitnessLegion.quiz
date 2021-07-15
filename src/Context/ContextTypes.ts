import { QuizType } from "../assets/quiz-types/quiz-types";

//Auth Context
export type authStateType = {
  status: string;
  uniqueAuthId: string | null;
  userId: string | null;
  error: string | null;
};

export type authActionsType =
  | { type: "AUTH_LOADING" }
  | {
      type: "AUTH_SUCCESS";
      uniqueAuthId: string | null;
      userId: string | null;
    }
  | {
      type: "AUTH_FAILED";
      error: string | null;
    }
  | { type: "AUTH_LOGOUT" };

//Quiz Context
export type quizStateType = {
  status: string;
  quizData: QuizType | null;
  error: string | null;
};

export type quizActionType =
  | { type: "QUIZ_ADD_LOADING" }
  | { type: "QUIZ_ADD_SUCCESS"; quizData: QuizType }
  | { type: "QUIZ_ADD_FAILED"; error: string | null }
  | { type: "SELECT_OPTION"; quizData: QuizType };
