import axios from "axios";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard/CategoryCard";

const Category = (): JSX.Element => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/category");
        setCategory(response.data.categories);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);
  return (
    <div>
      <div className="relative overflow-hidden py-16">
        <div className="flex flex-col">
          <span className="text-primary text-3xl font-semibold">
            Categories
          </span>
          <div className="p-4 flex flex-row flex-wrap justify-center w-full">
            {category.map((categoryData) => {
              // const categoryData = {
              //   ...category,
              // };
              return <CategoryCard {...categoryData} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
