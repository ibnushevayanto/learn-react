import { useContext, useEffect, useState } from "react";
import CartIcons from "../../../Cart/CartIcons/CartIcons";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../../../context/cart-context";

const HeaderCartButton = (props) => {
  const [IsBtnHighlighted, setIsBtnHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const jumlahItem = cartContext.items.reduce((prevValue, nextValue) => {
    return prevValue + +nextValue.amount;
  }, 0);
  const buttonClasses = `${styles.button}  ${IsBtnHighlighted && styles.bump}`;

  const { items } = cartContext;

  useEffect(() => {
    setIsBtnHighlighted(true);

    const setToFalse = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(setToFalse);
    };
  }, [items]);

  return (
    <button className={buttonClasses} onClick={() => props.togleCartHandler()}>
      <span className={styles.icon}>
        <CartIcons />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{jumlahItem}</span>
    </button>
  );
};

export default HeaderCartButton;
