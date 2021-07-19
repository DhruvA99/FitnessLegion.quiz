import React from "react";
import { QuestionType, QuizType } from "../../../assets/quiz-types/quiz-types";

type ResultQuizCardPropsType = {
  quesData: QuestionType;
};

const ResultQuizCard = ({ quesData }: ResultQuizCardPropsType) => {
  return (
    <div className="flex flex-wrap flex-row justify-center py-3 px-4">
      <span>{quesData.question}</span>
      {quesData.options.map((option) => {
        return (
          <div
            className={`px-4 py-3 ${
              !option.isSelected
                ? "bg-main"
                : option.isRight && option.isSelected
                ? "bg-green-600"
                : !option.isRight && option.isSelected
                ? "bg-red-600"
                : "bg-main"
            } my-3 mx-1 w-4/5`}
          >
            {console.log(option.isSelected)}
            <span className="text-white text-base">{option.text}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ResultQuizCard;
