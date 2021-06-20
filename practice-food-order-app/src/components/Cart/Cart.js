import { useContext, useCallback, useState, Fragment } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem/CartItem";
import Checkout from "./Checkout/Checkout";
import useRequest from "../../hooks/useRequest";
import Loading from "../UI/Loading/Loading";

const ModalActions = (props) => (
  <div className={styles.actions}>
    <button
      className={styles["button-alt"]}
      onClick={() => props.togleCartHandler()}
    >
      Close
    </button>
    {props.isHaveItem && (
      <button className={styles.button} onClick={props.togleCheckout}>
        Order
      </button>
    )}
  </div>
);

const ModalItem = (props) => (
  <Fragment>
    {props.cartItems}
    <div className={styles.total}>
      <span>Total Amount</span>
      <span>{props.totalAmount}</span>
    </div>
    {props.IsCheckout ? (
      <Checkout
        batalHandler={props.togleCheckout}
        onConfirm={props.submitHandler}
      />
    ) : (
      <ModalActions
        togleCheckout={props.togleCheckout}
        isHaveItem={props.isHaveItem}
        togleCartHandler={props.togleCartHandler}
      />
    )}
  </Fragment>
);

const Cart = (props) => {
  const { fetchData, IsLoading, Error } = useRequest();
  const [IsCheckout, setIsCheckout] = useState(false);
  const cartContext = useContext(CartContext);
  const [IsSubmitted, setIsSubmitted] = useState(false);
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
  const togleCheckout = () => {
    setIsCheckout((prevState) => !prevState);
  };

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
  const submitHandler = async (userData) => {
    await fetchData(
      "https://learn-react-new-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartContext.items,
        }),
      }
    );
    setIsSubmitted(true);
    cartContext.clearItem();
  };

  return (
    <Modal closeModal={props.togleCartHandler}>
      {IsLoading ? (
        <Loading />
      ) : Error ? (
        <p>{Error}</p>
      ) : IsSubmitted ? (
        <p>Data Berhasil Ditambahkan</p>
      ) : (
        <ModalItem
          submitHandler={submitHandler}
          cartItems={cartItems}
          totalAmount={totalAmount}
          IsCheckout={IsCheckout}
          togleCheckout={togleCheckout}
          isHaveItem={isHaveItem}
          togleCartHandler={props.togleCartHandler}
        />
      )}
    </Modal>
  );
};

export default Cart;
