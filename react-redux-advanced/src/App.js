import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { Fragment } from "react";
import { sendCartData, fetchCartData } from "./store/cart";

let isInitial = true;

function App() {
  const isShowCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.itemsCart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      dispatch(fetchCartData());
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
      <Layout>{isShowCart ? <Cart /> : <Products />}</Layout>;
    </Fragment>
  );
}

export default App;
