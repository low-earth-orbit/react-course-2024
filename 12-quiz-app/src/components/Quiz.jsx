import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleting from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]); // array of user answers
  const activeQuestionIndex = userAnswers.length; // derived state
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  if (quizIsComplete) {
    return (
      <div id="summary">
        <h2>Quiz completed</h2>
        <img src={quizCompleting} alt="Trophy icon" />
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers]; // this creates a new array
  shuffledAnswers.sort(() => Math.random() - 0.5); // this changes shuffledAnswers

  function handleSelectAnswer(answer) {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2> {QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
