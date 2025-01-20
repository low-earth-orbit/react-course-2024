import React, { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // this useEffect is for calling onTimeout function to update userAnswers with null answer for the current question
  // after timer expires.
  useEffect(() => {
    const timer = setTimeout(
      // time is out. we should move on to the next question
      onTimeout,
      timeout
    );

    // clear the timer
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]); // onTimeout is memoized using useCallback in Quiz component. It will not update every time QuestionTimer is rerendered

  // This useEffect is for displaying the progress bar.
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    // clear up existing interval to ensure only one interval running at the same time
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
    />
  );
}
