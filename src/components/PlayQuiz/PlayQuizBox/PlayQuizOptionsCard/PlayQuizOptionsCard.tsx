import React from "react";
import { optionType } from "../../../../assets/quiz-types/quiz-types";

const PlayQuizOptionsCard = (optionData: optionType) => {
  return (
    <div className="w-4/5 mx-auto my-3 bg-main text-white rounded-md p-3 cursor-pointer hover:bg-pink-800 shadow-md">
      <span>{optionData.text}</span>
    </div>
  );
};

export default PlayQuizOptionsCard;
