import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({
  questionText,
  answers,
  selectedAnswer,
  onSelectAnswer,
  answerState,
  onTimeout,
}) {
  return (
    <div id="question">
      {/* key changes react will unmount and remount the component */}
      {/* without adding key prop here, the component will not rerender because timeout and onTimeout values do not change */}
      <QuestionTimer
        timeout={10000}
        onTimeout={onTimeout}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
