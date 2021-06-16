import React from "react";
import { categoryPropsType } from "../categoryTypes";

const CategoryCard = (categoryData: categoryPropsType): JSX.Element => {
  return (
    <div className="bg-blue-400 px-5 py-3 transition duration-500 rounded-md my-5 mx-auto w-10/12 sm:w-2/5 lg:w-1/5 hover:bg-blue-500">
      <div className="flex flex-col p-4 cursor-pointer">
        <span className="text-white text-lg font-medium tracking-wider capitalize">
          {categoryData.categoryName}
        </span>
        <span className="font-normal text-white">
          No of Quiz:{" "}
          <span className="text-yellow-400 font-semibold">
            {categoryData.totalQuiz}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
