import { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/cart-context";

function App() {
  const [isCartShown, setisCartShown] = useState(false);
  const togleCartHandler = () => {
    setisCartShown((prevState) => !prevState);
  };

  return (
    <CartContextProvider>
      {isCartShown && <Cart togleCartHandler={togleCartHandler} />}
      <Header togleCartHandler={togleCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
