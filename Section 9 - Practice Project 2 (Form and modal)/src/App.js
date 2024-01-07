import React, { useState } from "react";
import AddUser from "./AddUser";
import UsersList from "./UsersList";

function App() {
  const [allUser, setAllUsers] = useState([]);

  console.log(allUser);
  return (
    <div>
      <AddUser setUsers={setAllUsers} />
      {allUser.length > 0 && <UsersList users={allUser} />}
    </div>
  );
}

export default App;
