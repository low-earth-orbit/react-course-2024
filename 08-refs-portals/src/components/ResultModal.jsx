import { useRef, forwardRef, useImperativeHandle } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, handleReset },
  ref
) {
  const dialog = useRef();

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  }); // works together with forwardRef. to define properties or methods that are accessible in this component
  // detaches timer challenge component from result modal component.

  return (
    <dialog ref={dialog} className="result-modal" onClose={handleReset}>
      {userLost ? <h2>You lost</h2> : <h2>Your Score: {score}</h2>}
      <p>
        Target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={handleReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
