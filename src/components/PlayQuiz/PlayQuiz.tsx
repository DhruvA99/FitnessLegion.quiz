import React from "react";
import PlayQuizBox from "./PlayQuizBox/PlayQuizBox";
import { useQuiz } from "../../Context/QuizContext/quiz-context";

const PlayQuiz = (): JSX.Element => {
  const {
    quizState: { quizData },
  } = useQuiz();
  return (
    <div className="p-3 bg-primary h-screen">
      <div className="p-6 flex flex-col">
        <div className="w-full flex flex-row justify-center">
          <span className="text-3xl">{quizData?.name}</span>
        </div>
        <div className="p-1 ">
          {quizData?.questions?.map((ques) => {
            let quesData = {
              question: ques.question,
              isAttempted: ques.isAttempted,
              points: ques.points,
              negativePoints: ques.negativePoints,
              options: ques.options,
            };
            return <PlayQuizBox {...quesData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlayQuiz;
