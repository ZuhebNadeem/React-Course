import React, { useState } from "react";
import style from "./Form.module.css";

const Form = (props) => {
  const [currentSaving, setCurrentSaving] = useState("10000");
  const [yearlySaving, setYearlySaving] = useState("1200");
  const [interest, setInterest] = useState("7");
  const [duration, setDuration] = useState("10");

  const submitForm = (e) => {
    e.preventDefault();

    const userInputValues = {
      currentSaving: +currentSaving,
      yearlySaving: +yearlySaving,
      interest: +interest,
      duration: +duration,
    };

    props.formSubmitted(userInputValues);
  };

  const refreshPage = (e) => {
    e.preventDefault();
    setCurrentSaving("10000");
    setYearlySaving("1200");
    setInterest("7");
    setDuration("10");

    props.formSubmitted("");
  };

  return (
    <form onSubmit={submitForm} className={style.form}>
      <div className={style.inputGroup}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={currentSaving}
            onChange={(e) => setCurrentSaving(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={yearlySaving}
            onChange={(e) => setYearlySaving(e.target.value)}
          />
        </p>
      </div>
      <div className={style.inputGroup}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </p>
      </div>
      <p className={style.actions}>
        <button type="reset" className={style.buttonAlt} onClick={refreshPage}>
          Reset
        </button>
        <button type="submit" className={style.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
