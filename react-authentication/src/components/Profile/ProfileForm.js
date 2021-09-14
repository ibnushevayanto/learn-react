import { useContext, useRef } from "react";
import classes from "./ProfileForm.module.css";
import AuthContext from "../../store/auth-context.js";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
  const authContext = useContext(AuthContext);
  const refChangePassword = useRef();
  const history = useHistory();

  const changePasswordHandler = async (e) => {
    e.preventDefault();

    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAkzBj3RCuzjdgfYi-e5GF07Ds1d3rji6A";
    const parameter = {
      body: JSON.stringify({
        idToken: authContext.token,
        password: refChangePassword.current.value,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    };
    const response = await fetch(url, parameter);
    const responseJson = await response.json();

    if (!response.ok) {
      const errorMessage = responseJson.error.message;
      alert(errorMessage);
    } else {
      alert("Berhasil mereset password");
      authContext.logout();
      history.push("/auth");
    }
  };

  return (
    <form onSubmit={changePasswordHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          required
          minLength="7"
          type="password"
          id="new-password"
          ref={refChangePassword}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
