export type themeContextType = {
  theme: boolean;
};

export type optionType = {
  _id: string;
  text: string;
  isRight: boolean;
  isSelected: boolean;
};

export type QuestionType = {
  _id: string;
  question: string;
  isAttempted: boolean;
  points: number;
  negativePoints: number;
  options: optionType[];
};

export type QuizType = {
  _id: string;
  name: string;
  totalQuestions: string;
  score: number;
  category: string;
  questions: QuestionType[];
};
