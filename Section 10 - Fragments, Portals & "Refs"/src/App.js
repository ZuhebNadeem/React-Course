import React, { useState } from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";

function App() {
  const [allUser, setAllUsers] = useState([]);

  return (
    <>
      <AddUser setUsers={setAllUsers} />
      {allUser.length > 0 && <UsersList users={allUser} />}
    </>
  );
}

export default App;
