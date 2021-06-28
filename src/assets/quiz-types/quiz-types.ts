export type themeContextType = {
  theme: boolean;
};

export type optionType = {
  text: string;
  isRight: boolean;
  isSelected: false;
};

export type QuestionType = {
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
