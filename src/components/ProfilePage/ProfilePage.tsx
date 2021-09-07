import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { QuizType } from "../../assets/quiz-types/quiz-types";
import { useAuth } from "../../Context/Auth/auth-context";
import Navbar from "../NavigationBar/NavBar";

type profileResponseDataType = {
  success: boolean;
  quizData?: { score: string; quizData: QuizType }[];
  username?: string;
  message?: string;
  errorMessage?: string;
};

const ProfilePage = (): JSX.Element => {
  const [data, setData] = useState<profileResponseDataType | undefined | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const {
    authState: { uniqueAuthId, userId },
  } = useAuth();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get<profileResponseDataType>(`/user`, {
          headers: {
            Authorization: `Basic ${uniqueAuthId}`,
            userId: userId,
          },
        });

        if (response.data.success) {
          setData(response.data);
          setLoading(false);
          setError("");
        } else {
          setLoading(false);
          setError(response.data.message ? response.data.message : "");
        }
      } catch (error: any) {
        setLoading(false);
        setError(error.response.data.message);
      }
    })();
  }, []);
  let page = <></>;
  if (loading) {
    page = <h3 className="p-5">Loading...</h3>;
  }
  if (!loading) {
    if (error === "" && data) {
      page = (
        <div className="py-10 flex flex-col bg-primary min-h-screen">
          <span className="text-3xl text-primary p-4">
            Welcome {data.username}
          </span>
          <div>
            <span className="block py-5 text-xl text-primary">Your Quizes</span>
            <div className="flex flex-wrap justify-center">
              {data.quizData ? (
                data.quizData.map((item) => (
                  <div className="bg-gray-200 w-3/12 py-5 px-4 flex flex-col m-2.5 rounded shadow-md">
                    <span className="text-black">{item.quizData.name}</span>
                    <span className="text-black mt-3">
                      Score Obtained:{item.score}
                    </span>
                  </div>
                ))
              ) : (
                <span>No quiz found.Play a quiz to add to this list </span>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      page = (
        <div>
          <h3 className="p-5">{`${error}`}</h3>
        </div>
      );
    }
  }
  return (
    <>
      <Navbar />
      {page}
    </>
  );
};

export default ProfilePage;
