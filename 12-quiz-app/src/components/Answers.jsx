import React, { useState, useCallback, useRef } from "react";
import QUESTIONS from "../questions.js";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef(); // memorize shuffledAnswers it doesn't shuffle again upon rerender

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // this changes shuffledAnswers
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";
        if (isSelected) {
          if (answerState === "answered") {
            cssClasses = "selected";
          }

          if (answerState === "correct" || answerState === "wrong") {
            cssClasses = answerState;
          }
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClasses}
              disabled={answerState !== ""} // disable the button if an answer is selected to prevent clicking another answer or double click the same answer for the same question
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
