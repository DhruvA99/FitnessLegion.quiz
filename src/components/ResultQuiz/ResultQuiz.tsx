import React from "react";
import { useQuiz } from "../../Context/QuizContext/quiz-context";
import Navbar from "../NavigationBar/NavBar";
import ResultQuizCard from "./ResultQuizCard/ResultQuizCard";

const ResultQuiz = (): JSX.Element => {
  const {
    quizState: { quizData },
    quizDispatch,
  } = useQuiz();
  return (
    <>
      <Navbar />
      <div className="flex flex-col">
        <span className="text-primary text-3xl p-4">Your Result</span>
        <div className="flex flex-col">
          {quizData &&
            quizData.questions.map((ques) => {
              return (
                <div className="flex flex-col p-3">
                  <ResultQuizCard quesData={ques} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ResultQuiz;
