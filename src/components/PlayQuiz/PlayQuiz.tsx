import React, { useState } from "react";
import PlayQuizBox from "./PlayQuizBox/PlayQuizBox";
import { useQuiz } from "../../Context/QuizContext/quiz-context";

const PlayQuiz = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const {
    quizState: { quizData, status: quizStatus },
  } = useQuiz();

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
      </div>
    </div>
  );
};

export default PlayQuiz;
