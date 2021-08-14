import classes from "./CartButton.module.css";

const CartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.clickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{props.jumlahItem}</span>
    </button>
  );
};

export default CartButton;
