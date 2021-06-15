import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { themeContextType } from "../../assets/quiz-types/quiz-types";

const ThemeContext = createContext({
  theme: false,
  setThemeFunction: () => {},
});

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<boolean>(false);

  const setThemeFunction = () => {
    const root = window.document.documentElement;
    root.classList.remove(theme ? "dark" : "light");
    root.classList.add(theme ? "light" : "dark");
    setTheme((theme) => !theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeFunction }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
