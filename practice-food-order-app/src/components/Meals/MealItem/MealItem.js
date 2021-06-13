import { useRef, useContext, useCallback } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";
import CartContext from "../../../context/cart-context";

const MealItem = (props) => {
  const formRef = useRef();
  const price = `$${props.data.price.toFixed(2)}`;
  const cartContext = useContext(CartContext);
  const { addItem } = cartContext;
  const { data } = props;
  const addHander = useCallback(
    (e) => {
      e.preventDefault();
      const dataToSend = { ...data };
      dataToSend.amount = formRef.current.value;
      addItem(dataToSend);
    },
    [addItem, data]
  );

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.data.name}</h3>
        <div className={styles.description}>{props.data.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          ref={formRef}
          id={props.id}
          addHander={addHander}
          data={props.data}
        />
      </div>
    </li>
  );
};

export default MealItem;
