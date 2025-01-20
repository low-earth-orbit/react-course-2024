import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from "../questions";

export default function Question({ index, onSelectAnswer, onTimeout }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer, // The first answer for the question, QUESTIONS[key].answers[0], is the correct answer
      });

      setTimeout(() => {
        // after 2s, switch to the next question
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  // initial timer
  let timer = 10000;

  if (answer.selectedAnswer) {
    // after the user selected an answer
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    // after user answered the question
    timer = 2000;
  }

  return (
    <div id="question">
      {/* key changes react will unmount and remount the component */}
      {/* without adding key prop here, the component will not rerender because timeout and onTimeout values do not change */}
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer ? null : onTimeout} // do not skip question if the current question is answered. onTimeout is handleSkipAnswer defined in Quiz component
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
