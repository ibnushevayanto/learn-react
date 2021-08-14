import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const MainHeader = (props) => {
  const dispatch = useDispatch();
  const jumlahItem = useSelector((state) => {
    return Object.values(state.cart.itemsCart).reduce(
      (curValue, nextValue) => curValue + nextValue,
      0
    );
  });

  const cartButtonHandler = () => {
    dispatch(cartActions.TOGGLE_CART());
  };

  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton clickHandler={cartButtonHandler} jumlahItem={jumlahItem} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
