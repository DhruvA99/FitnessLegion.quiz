import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import QuizList from "./components/QuizList/QuizList";
import Login from "./components/Auth/Login/Login";
import PlayQuiz from "./components/PlayQuiz/PlayQuiz";
import ResultQuiz from "./components/ResultQuiz/ResultQuiz";
import Signup from "./components/Auth/Signup/Signup";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import { useAuth } from "./Context/Auth/auth-context";
import { checkAuthStatus } from "./Context/Auth/authActions";

function App() {
  const { authDispatch } = useAuth();
  useEffect(() => {
    checkAuthStatus(authDispatch);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/list" element={<QuizList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/play" element={<PlayQuiz />} />
        <Route path="/result" element={<ResultQuiz />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
