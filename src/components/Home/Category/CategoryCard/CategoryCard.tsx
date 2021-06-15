import React from "react";
import { categoryPropsType } from "../categoryTypes";

const CategoryCard = (categoryData: categoryPropsType): JSX.Element => {
  return (
    <div className="bg-blue-400 px-5 py-3 rounded-md my-5 mx-auto">
      <span className="text-white font-medium tracking-wider">
        {categoryData.categoryName}
      </span>
    </div>
  );
};

export default CategoryCard;
