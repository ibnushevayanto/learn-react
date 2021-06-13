import { useContext, useCallback } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const { addItem, removeItem } = cartContext;
  const addItemHandler = useCallback(
    (item) => {
      const itemToAdd = { ...item };
      itemToAdd.amount = 1;
      addItem(itemToAdd);
    },
    [addItem]
  );
  const removeItemHandler = useCallback(
    (item) => {
      removeItem(item);
    },
    [removeItem]
  );
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((res) => (
        <CartItem
          {...res}
          key={res.id}
          onAdd={() => addItemHandler(res)}
          onRemove={() => removeItemHandler(res)}
        />
      ))}
    </ul>
  );
  const isHaveItem = cartContext.items.length || false;
  const totalAmount = +cartContext.totalAmount.toFixed(2);
  return (
    <Modal closeModal={props.togleCartHandler}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles["button-alt"]}
          onClick={() => props.togleCartHandler()}
        >
          Close
        </button>
        {isHaveItem && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
