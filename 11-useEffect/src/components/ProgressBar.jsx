import { useEffect, useState } from "react";
import { TIMER_DELAY } from "./DeleteConfirmation";

export default function ProgressBar() {
  const [remainingTime, setRemainingTime] = useState(TIMER_DELAY);

  useEffect(() => {
    // executes every period
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={TIMER_DELAY} />;
}
