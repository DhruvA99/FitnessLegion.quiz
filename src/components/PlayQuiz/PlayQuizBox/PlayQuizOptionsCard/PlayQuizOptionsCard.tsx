import React, { useState } from "react";
import { optionType, QuizType } from "../../../../assets/quiz-types/quiz-types";
import { useQuiz } from "../../../../Context/QuizContext/quiz-context";
import { selectOptionAction } from "../../../../Context/QuizContext/quizActions";

type propsType = {
  _id: string;
  text: string;
  isSelected: boolean;
  quesId: string;
};

const PlayQuizOptionsCard = (props: propsType) => {
  const [selectedQuesId, setSelectedQuesId] = useState<boolean>(false);
  const { quizState, quizDispatch } = useQuiz();
  const { _id, text, quesId, isSelected } = props;

  return (
    <div
      className={`w-4/5 mx-auto my-3  text-white rounded-md p-3 cursor-pointer hover:bg-blue-700 shadow-md ${
        isSelected ? "bg-blue-900" : "bg-main"
      }`}
      onClick={() => {
        setSelectedQuesId(true);
        quizState.quizData &&
          selectOptionAction(quizDispatch, quizState.quizData, quesId, _id);
      }}
    >
      <span>{text}</span>
    </div>
  );
};

export default PlayQuizOptionsCard;
