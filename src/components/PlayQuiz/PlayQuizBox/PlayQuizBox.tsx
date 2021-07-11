import React from "react";
import { QuestionType, QuizType } from "../../../assets/quiz-types/quiz-types";

const PlayQuizBox = (quesData: QuestionType): JSX.Element => {
  return (
    <div className="p-1 flex flex-col">
      <span>Question: {quesData.question}</span>
    </div>
  );
};

export default PlayQuizBox;
