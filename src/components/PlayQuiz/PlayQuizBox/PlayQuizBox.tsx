import React from "react";
import PlayQuizOptionsCard from "./PlayQuizOptionsCard/PlayQuizOptionsCard";
import {
  optionType,
  QuestionType,
  QuizType,
} from "../../../assets/quiz-types/quiz-types";

const PlayQuizBox = (quesData: {
  _id: string | undefined;
  question: string | null | undefined;
  options: optionType[] | null | undefined;
  isAttempted: boolean | undefined | null;
  points: number | undefined | null;
  negativePoints: number | undefined | null;
}): JSX.Element => {
  return (
    <div className="p-1 flex flex-col pt-32">
      <span className="text-primary text-xl pb-4"> {quesData.question}</span>
      <div className="flex flex-row flex-wrap">
        {quesData?.options?.map(
          (option: {
            _id: string;
            text: any;
            isRight: any;
            isSelected: any;
          }) => {
            let optionData = {
              _id: option._id,
              text: option.text,
              isRight: option.isRight,
              isSelected: option.isSelected,
            };
            let quesId = quesData._id !== undefined ? quesData._id : "string";

            return <PlayQuizOptionsCard {...optionData} quesId={quesId} />;
          }
        )}
      </div>
    </div>
  );
};

export default PlayQuizBox;
