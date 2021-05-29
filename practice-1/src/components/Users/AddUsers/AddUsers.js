import React, { useRef, useState } from "react";
import styles from "./AddUsers.module.css";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../../components/UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const usernameref = useRef();
  const ageref = useRef();
  const [Error, setError] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    const usernameValue = usernameref.current.value;
    const ageValue = ageref.current.value;

    if (usernameValue.trim().length === 0 || ageValue.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Username or Age cannot empty",
      });
      return;
    }
    if (+ageValue < 1) {
      setError({
        title: "Invalid Input",
        message: "Invalid age input",
      });
      return;
    }

    props.addUsersHandler({ username: usernameValue, age: ageValue });
    usernameref.current.value = "";
    ageref.current.value = "";
  };

  const closeDialogErrorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {Error && (
        <ErrorModal
          title={Error.title}
          closeDialog={closeDialogErrorHandler}
          message={Error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input name="username" id="username" type="text" ref={usernameref} />
          <label htmlFor="age">Age (Years)</label>
          <input name="age" id="age" type="number" ref={ageref} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
