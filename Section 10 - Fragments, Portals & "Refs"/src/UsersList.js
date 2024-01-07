import React from "react";
import style from "./UsersList.module.css";
import Card from "./Card";

const UsersList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users &&
          props.users.map((user) => (
            <li key={user.id}>
              {user.userName} ({user.age} years old)
            </li>
          ))}
      </ul>
    </Card>
  );
};

export default UsersList;
