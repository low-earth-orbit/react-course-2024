import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

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
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex} // force react to destroy and create a new component
        index={activeQuestionIndex} // key prop is used exclusively for react. it should not be used by the user. so we need this index prop here
        onSelectAnswer={handleSelectAnswer}
        onTimeout={handleSkipAnswer}
      />
    </div>
  );
}
