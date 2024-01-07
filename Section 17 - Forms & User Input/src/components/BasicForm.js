import { useState } from "react";
import useInputForm from "../hooks/use-inputForm";

const BasicForm = (props) => {
  const {
    value: firstNameInput,
    valid: firstNameValid,
    hasError: errorFirstName,
    onChange: onChangeFirstName,
    onBlur: onBlurFirstName,
    reset: resetFirstName,
  } = useInputForm((value) => value.trim() !== "");

  const {
    value: lastNameInput,
    valid: lastNameValid,
    hasError: errorLastName,
    onChange: onChangeLastName,
    onBlur: onBlurLastName,
    reset: resetLastName,
  } = useInputForm((value) => value.trim() !== "");

  const {
    value: emailInput,
    valid: emailValid,
    hasError: errorEmail,
    onChange: onChangeEmail,
    onBlur: onBlurEmail,
    reset: resetEmail,
  } = useInputForm((value) => value.includes("@"));

  const firstNameClass = errorFirstName
    ? "form-control invalid"
    : "form-control";
  const lastNameClass = errorLastName ? "form-control invalid" : "form-control";
  const emailClass = errorEmail ? "form-control invalid" : "form-control";

  let formIsValid = false;
  if (firstNameValid && lastNameValid && emailValid) {
    formIsValid = true;
  }

  const formSubmitted = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(firstNameInput, lastNameInput, emailInput);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={formSubmitted}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameInput}
            onChange={onChangeFirstName}
            onBlur={onBlurFirstName}
          />
          {errorFirstName && <p className="error-text">Feil</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameInput}
            onChange={onChangeLastName}
            onBlur={onBlurLastName}
          />
          {errorLastName && <p className="error-text">Feil</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          value={emailInput}
          onChange={onChangeEmail}
          onBlur={onBlurEmail}
        />
        {errorEmail && <p className="error-text">Feil</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
