import React, { useState } from "react";
import "./UsersList";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
import Card from "./Card";
import style from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);

  const formSubmitted = (e) => {
    e.preventDefault();

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values) ",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0) ",
      });
      return;
    }
    const inputUser = {
      id: Math.random().toString(),
      userName: userName,
      age: age,
    };

    props.setUsers((oldArray) => [...oldArray, inputUser]);
    setUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
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
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
