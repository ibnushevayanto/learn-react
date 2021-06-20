import classes from "./Loading.module.css";

const Loading = () => (
  <div className={classes.containerLoading}>
    <div className={classes["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loading;
