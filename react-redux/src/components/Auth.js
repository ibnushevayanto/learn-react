import classes from "./Auth.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Auth = () => {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.LOGIN());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={email} type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input ref={password} type="password" id="password" required />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
