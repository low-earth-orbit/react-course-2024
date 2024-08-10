import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: newValue };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
            type="number"
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
            type="number"
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
            type="number"
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            onChange={(event) => handleChange("duration", event.target.value)}
            value={userInput.duration}
            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
}
