import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = (props) => {
  const btnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    btnRef.current.click();
    return () => {
      console.log("[Cockpit.js] componentWillUnmount useEfect");
    };
  }, []);

  /*
   ** useEffect yang kedua tidak memiliki paramter tambahan seperti useEffect pertama
   */
  useEffect(() => {
    console.log("[Cockpit.js] useEffect2");
    return () => {
      console.log("[Cockpit.js] componentWillUnmount useEfect2");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={btnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>{" "}
      <button onClick={authContext.login}>Login</button>
    </div>
  );
};

// * React.memo melihat perbedaannya dari props
export default React.memo(cockpit);
