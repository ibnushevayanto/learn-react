import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const Cart = (props) => {
  const itemsCart = useSelector((state) => {
    const itemsProduct = state.product.items
      .filter((res) => {
        if (state.cart.itemsCart[res.id]) {
          return true;
        } else {
          return false;
        }
      })
      .map((res) => ({
        ...res,
        quantity: state.cart.itemsCart[res.id],
        total: state.cart.itemsCart[res.id] * res.price,
      }));

    return itemsProduct;
  });

  const dispatch = useDispatch();

  const addItem = (id) => {
    dispatch(cartActions.ADD_ITEMS(id));
  };

  const reduceItem = (id) => {
    dispatch(cartActions.REDUCE_ITEMS(id));
  };

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {itemsCart.map((res) => (
          <CartItem
            item={res}
            key={res.id}
            reduceItemHandler={reduceItem.bind(null, res.id)}
            addItemHandler={addItem.bind(null, res.id)}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
