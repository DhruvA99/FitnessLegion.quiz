import axios from "axios";
import React, { useEffect, useState } from "react";
import QuizListCard from "./QuizListCard/QuizListCard";
import { useSearchParams } from "react-router-dom";
import { QuizType } from "../../assets/quiz-types/quiz-types";
import Navbar from "../NavigationBar/NavBar";

const QuizList = (): JSX.Element => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<QuizType[]>([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `/category/list?category=${searchParams.get("category")}`
      );
      setData(response.data.quizData);
    })();
  }, [searchParams]);

  return (
    <>
      <Navbar />
      <div className="bg-primary py-10 min-h-screen w-full">
        <div className="px-12 py-8">
          <span className="text-primary uppercase text-3xl">
            {searchParams.get("category")}
          </span>
          <div>
            {data === [] ? (
              <span className="">
                Could not fetch any quiz.Please try again!
              </span>
            ) : (
              <>
                {data.map((quizData: QuizType, index: number) => (
                  <QuizListCard
                    key={quizData._id}
                    index={index}
                    quizData={quizData}
                  />
                ))}{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizList;
