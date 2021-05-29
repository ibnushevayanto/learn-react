import React from "react";
import styles from "./Button.module.css";

const Button = (props) => (
  <button
    className={styles.button}
    type={props.type || "submit"}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
