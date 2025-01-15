import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import quizCompleting from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]); // array of user answers
  console.log("test userAnswers =", userAnswers);
  const activeQuestionIndex = userAnswers.length; // derived state
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(answer) {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

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

  return (
    <div id="quiz">
      <div id="question">
        {/* key changes react will unmount and remount the component */}
        {/* without adding key prop here, the component will not rerender because timeout and onTimeout values do not change */}
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
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
