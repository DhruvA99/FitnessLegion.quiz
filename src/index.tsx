import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./Context/theme/theme-context";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { AuthProvider } from "./Context/Auth/auth-context";
import { QuizProvider } from "./Context/QuizContext/quiz-context";

axios.defaults.baseURL = "http://localhost:3005/api";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <QuizProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </QuizProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
