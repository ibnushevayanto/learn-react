import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => (
  <div onClick={props.closeDialog} className={styles.backdrop}></div>
);

const Modal = (props) => (
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.closeDialog}>Okay</Button>
    </footer>
  </Card>
);

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeDialog={props.closeDialog} />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          message={props.message}
          title={props.title}
          closeDialog={props.closeDialog}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
