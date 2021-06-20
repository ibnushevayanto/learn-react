import React, { useState, useEffect, useReducer, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const reducerEmail = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  } else if (action.type === "VALIDATE_EMAIL") {
    return { value: state.value, isValid: state.value.includes("@") };
  } else {
    return { value: "", isValid: false };
  }
};

const reducerPassword = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  } else if (action.type === "VALIDATE_PASSWORD") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  } else {
    return { value: "", isValid: false };
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [Email, dispatchEmail] = useReducer(reducerEmail, {
    value: "",
    isValid: false,
  });
  const [Password, dispatchPassword] = useReducer(reducerPassword, {
    value: "",
    isValid: false,
  });
  const inputEmail = useRef();
  const inputPassword = useRef();

  const { isValid: emailIsValid } = Email;
  const { isValid: passwordIsValid } = Password;

  /**
   * useEffect dibawah memiliki arti
   * akan melakukan pengecheckan saat value dari email dan password mengalami perubahan
   */
  useEffect(() => {
    const checkValidity = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);
    return () => {
      console.log("clear validity");
      clearTimeout(checkValidity);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(
    //   event.target.value.includes("@") && Password.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ value: event.target.value, type: "USER_INPUT" });
    // setFormIsValid(
    //   Email.value.includes("@") && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "VALIDATE_EMAIL" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "VALIDATE_PASSWORD" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.onLogin(Email.value, Password.value);
    } else if (!Email.isValid) {
      inputEmail.current.focus();
    } else {
      inputPassword.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          id="email"
          isValid={Email.isValid}
          value={Email.value}
          ref={inputEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          label="Email"
        />
        <Input
          type="password"
          id="password"
          ref={inputPassword}
          isValid={Password.isValid}
          value={Password.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          label="Password"
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
