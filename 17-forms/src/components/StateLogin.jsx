import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password &&
    (enteredValues.password.length < 6 || enteredValues.password.length > 20);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    console.log("enteredValues:", enteredValues);
  }

  function handleInputChange(identifier, event) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: false, // Reset the edited state when the user types in the input
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: true, // Mark the field as edited when the input loses focus
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Login</h2>

      <div className="control-row">
        <Input
          id="email"
          label="Email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event)}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email address."}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          onChange={(event) => handleInputChange("password", event)}
          value={enteredValues.password}
          error={
            passwordIsInvalid && "Password must be between 6 and 20 characters."
          }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
