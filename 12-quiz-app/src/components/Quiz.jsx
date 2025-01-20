import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleting from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]); // array of user answers
  const activeQuestionIndex = userAnswers.length; // derived state

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <h2>Quiz completed</h2>
        <img src={quizCompleting} alt="Trophy icon" />
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex} // force react to destroy and create a new component
        // key prop is used exclusively for react. it should not be used by the user
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onTimeout={handleSkipAnswer}
      />
    </div>
  );
}
