import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue }; // + converts string to number
    });
  }

  return (
    <>
      <Header />
      <UserInput input={userInput} onInputChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
