import React, { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./Form.js";
import Table from "./Table";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState([]);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput.currentSaving;
    const yearlyContribution = userInput.yearlySaving;
    const expectedReturn = +userInput.interest / 100;
    const duration = +userInput.duration;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form formSubmitted={calculateHandler} />
      <Table allData={yearlyData} initalInvestment={userInput.currentSaving} />
    </div>
  );
}

export default App;

