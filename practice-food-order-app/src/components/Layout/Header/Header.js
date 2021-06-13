import { Fragment } from "react";
import styles from "./Header.module.css";
import mealsImage from "../../../assets/images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton togleCartHandler={props.togleCartHandler} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
