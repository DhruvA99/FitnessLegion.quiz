import React from "react";
import { QuizType } from "../../../assets/quiz-types/quiz-types";

const QuizListCard = ({
  quizData,
  index,
}: {
  quizData: QuizType;
  index: number;
}): JSX.Element => {
  return (
    <>
      <div
        className={`w-full ${
          index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
        } opacity-80 rounded-md px-10 py-6 my-12 flex flex-col lg:flex-row`}
      >
        <div className="flex flex-col lg:w-1/2 xl:w-2/3">
          <span className="text-lg font-medium tracking-wide">
            {quizData.name}
          </span>
          <span className="tracking-wide text-yellow-600 font-semibold">
            Score:{quizData.score}
          </span>
        </div>
        <div className="p-3 lg:w-1/2 xl:w-1/3">
          <button className="rounded-xl bg-main py-2 px-3 text-white font-medium w-1/2 focus:outline-none focus:ring  ">
            Play
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizListCard;
