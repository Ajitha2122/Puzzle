import { useCallback, useState } from "react";
import QUESTIONS from "../question.js";
import quizCompleteImage from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setUserAnswers((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });
    },
    [activeQuestionIndex]
  );
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);
  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="Tropy ICON" />
        <h2>QUIZ COMPLETED !</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
