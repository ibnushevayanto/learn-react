import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers/AddUsers";
import UsersList from "./components/Users/UsersList/UsersList";

function App() {
  const [users, setusers] = useState([]);

  const addUsersHandler = (value) => {
    setusers((prevState) => prevState.concat(value));
  };

  return (
    <div>
      <AddUsers addUsersHandler={addUsersHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
