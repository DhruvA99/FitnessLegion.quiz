import React, { useState } from "react";
import PlayQuizBox from "./PlayQuizBox/PlayQuizBox";
import classes from "./PlayQuiz.module.css";
import { useQuiz } from "../../Context/QuizContext/quiz-context";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavigationBar/NavBar";
import { finishQuiz } from "../../Context/QuizContext/quizActions";

const PlayQuiz = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const navigate = useNavigate();

  const {
    quizState: { quizData, status: quizStatus, totalScore },
    quizDispatch,
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
    _id: quizData?.questions[currentIndex]._id,
    question: quizData?.questions[currentIndex].question,
    isAttempted: quizData?.questions[currentIndex].isAttempted,
    points: quizData?.questions[currentIndex].points,
    negativePoints: quizData?.questions[currentIndex].negativePoints,
    options: quizData?.questions[currentIndex].options,
  };

  let page = <></>;
  if (quizData) {
    page = (
      <div className="bg-primary min-h-screen">
        <Navbar />
        <div className="p-6 flex flex-col lg:w-4/5 mx-auto">
          <div className="w-full flex flex-col justify-center">
            <span className="w-full text-3xl text-primary">
              {quizData?.name}
            </span>
            {/* <span className="w-full mt-4 text-lg text-primary">
              Score:{totalScore}
            </span> */}
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
              onClick={() => {
                finishQuiz(quizDispatch, quizData._id, quizData.score);
                navigate("/result");
              }}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    page = <p>Error.Please try again</p>;
  }
  return <>{page}</>;
};

export default PlayQuiz;
