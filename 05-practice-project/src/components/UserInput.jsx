export default function UserInput({ input, onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
            value={input.initialInvestment}
            type="number"
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
            value={input.annualInvestment}
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
              onInputChange("expectedReturn", event.target.value)
            }
            value={input.expectedReturn}
            type="number"
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            onChange={(event) => onInputChange("duration", event.target.value)}
            value={input.duration}
            type="number"
            min="1"
            required
          />
        </p>
      </div>
    </section>
  );
}
