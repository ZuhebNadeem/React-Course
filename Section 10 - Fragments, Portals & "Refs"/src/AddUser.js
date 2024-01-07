import React, { useState, useRef } from "react";
import "./UsersList";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import Card from "./Card";
import style from "./AddUser.module.css";
import Wrapper from "./Wrapper";

const AddUser = (props) => {
  const [error, setError] = useState(false);
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const formSubmitted = (e) => {
    e.preventDefault();

    const entredName = nameInputRef.current.value;
    const entredAge = ageInputRef.current.value;

    if (entredName.trim().length === 0 || entredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values) ",
      });
      return;
    }

    if (+entredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0) ",
      });
      return;
    }

    const inputUser = {
      id: Math.random().toString(),
      userName: entredName,
      age: entredAge,
    };

    props.setUsers((oldArray) => [...oldArray, inputUser]);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={style.input}>
        <form onSubmit={formSubmitted}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageInputRef} />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
