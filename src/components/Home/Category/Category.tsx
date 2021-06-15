import React, { useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";

const Category = (): JSX.Element => {
  const [category, setCategory] = useState([
    { id: "123", categoryName: "Fitness1", quizList: ["hello"] },
    { id: "234", categoryName: "Fitness2", quizList: ["hello"] },
    { id: "345", categoryName: "Fitness3", quizList: ["hello"] },
  ]);
  return (
    <div>
      <div className="relative overflow-hidden py-16">
        <div className="container flex flex-col">
          <span className="text-primary text-3xl font-semibold">
            Categories
          </span>
          <div className="p-4 flex flex-row">
            {category.map((category) => {
              const categoryData = {
                ...category,
              };
              return <CategoryCard {...categoryData} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
