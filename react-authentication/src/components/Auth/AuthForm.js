import { useState, useRef, Fragment, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";
import { useHistory } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [IsLoading, setIsLoading] = useState(false);
  const passwordInput = useRef();
  const emailInput = useRef();
  const formAuthentication = useRef();
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const signUpHandler = async () => {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAkzBj3RCuzjdgfYi-e5GF07Ds1d3rji6A";
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.current.value,
        password: passwordInput.current.value,
        returnSecureToken: true,
      }),
      method: "POST",
    };

    setIsLoading(true);
    const response = await fetch(url, params);
    const responseJson = await response.json();

    if (response.ok) {
      const expirationTime = new Date(new Date().getTime() + (+responseJson.expiresIn * 1000));
      authContext.login(responseJson.idToken, expirationTime.toISOString());
      history.push("/");
    } else {
      const errorMessage = responseJson.error.message;
      alert(errorMessage);
    }
    setIsLoading(false);
  };

  const signInHandler = async () => {
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAkzBj3RCuzjdgfYi-e5GF07Ds1d3rji6A";
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput.current.value,
        password: passwordInput.current.value,
        returnSecureToken: true,
      }),
      method: "POST",
    };

    setIsLoading(true);
    const response = await fetch(url, params);
    const responseJson = await response.json();

    if (response.ok) {
      const expirationTime = new Date(new Date().getTime() + (+responseJson.expiresIn * 1000));
      authContext.login(responseJson.idToken, expirationTime.toISOString());
      history.push("/");
    } else {
      const errorMessage = responseJson.error.message;
      alert(errorMessage);
    }
    setIsLoading(false);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (isLogin) {
      signInHandler();
    } else {
      signUpHandler();
    }
  };

  return (
    <Fragment>
      {IsLoading && (
        <p style={{ textAlign: "center", marginBottom: 20 }}>Loading...</p>
      )}
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitFormHandler} ref={formAuthentication}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInput} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" required ref={passwordInput} />
          </div>
          <div className={classes.actions}>
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default AuthForm;
