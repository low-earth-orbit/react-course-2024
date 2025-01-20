import React, { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleting from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";

export default function Quiz() {
  const [answerState, setAnswerState] = useState("unanswered");
  const [userAnswers, setUserAnswers] = useState([]); // array of user answers
  console.log("test userAnswers =", userAnswers);

  const activeQuestionIndex =
    answerState === "unanswered" ? userAnswers.length : userAnswers.length - 1; // derived state
  console.log("test activeQuestionIndex =", activeQuestionIndex);

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");

      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          // the selected answer is correct
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        // after answerState being set to "correct" or "wrong", activeQuestionIndex will be userAnswers.length, which is the next question's index
        setTimeout(() => {
          // this resets answerState to "unanswered" because the question is just answered
          setAnswerState("unanswered");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

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
        questionText={QUESTIONS[activeQuestionIndex].text}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSelectAnswer={handleSelectAnswer}
        answerState={answerState}
        onTimeout={handleSkipAnswer}
      />
    </div>
  );
}
