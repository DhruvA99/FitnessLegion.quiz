import React, { useState } from "react";
import PlayQuizBox from "./PlayQuizBox/PlayQuizBox";
import classes from "./PlayQuiz.module.css";
import { useQuiz } from "../../Context/QuizContext/quiz-context";

const PlayQuiz = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const {
    quizState: { quizData, status: quizStatus },
  } = useQuiz();

  const changeQuestion = (action: string) => {
    switch (action) {
      case "next":
        setCurrentIndex((currentIndex) => currentIndex + 1);
        break;
      case "previous":
        setCurrentIndex((currentIndex) => currentIndex - 1);
        break;
      default:
        console.log("invalid command ");
    }
  };

  let quesData = {
    question: quizData?.questions[currentIndex].question,
    isAttempted: quizData?.questions[currentIndex].isAttempted,
    points: quizData?.questions[currentIndex].points,
    negativePoints: quizData?.questions[currentIndex].negativePoints,
    options: quizData?.questions[currentIndex].options,
  };
  return (
    <div className="p-3 bg-primary h-screen">
      <div className="p-6 flex flex-col">
        <div className="w-full flex flex-row justify-center">
          <span className="text-3xl">{quizData?.name}</span>
        </div>
        {quizStatus === "quizSuccess" && (
          <div className="p-1 ">
            <PlayQuizBox {...quesData} />
          </div>
        )}
        {quizStatus === "normal" || quizStatus === "loading" ? (
          <span>Loading</span>
        ) : null}
        <div className="flex flex-row flex-wrap pt-10 m-auto w-full justify-center">
          <button
            className={`w-2/5 mx-1 px-3 py-2 text-white rounded-md bg-pink-600 hover:bg-pink-700 disabled:opacity-50 ${classes.actionButton}`}
            disabled={currentIndex === 0 ? true : false}
            onClick={() => changeQuestion("previous")}
          >
            Previous
          </button>
          <button
            className={`w-2/5 mx-1 px-3 py-2 text-white rounded-md bg-pink-600 hover:bg-pink-700 ${classes.actionButton}`}
            disabled={
              quizData?.questions.length === currentIndex + 1 ? true : false
            }
            onClick={() => changeQuestion("next")}
          >
            Next
          </button>
          <button
            className={`w-2/5 mx-1 mt-16 px-3 py-2 text-white rounded-md bg-green-600 ${classes.actionButton}`}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayQuiz;
