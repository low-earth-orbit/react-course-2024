import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    // time expired
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open(); // open method defined by useImperativeHandle hook in the component
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => setTimeRemaining(prev - 10));
    }, 10); // 10ms
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open(); // open method defined by useImperativeHandle hook in the component
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result="lost"
        targetTime={targetTime}
      ></ResultModal>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
