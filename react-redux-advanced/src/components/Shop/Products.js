import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const Products = (props) => {
  const itemsProduct = useSelector((state) => state.product.items);
  const dispatch = useDispatch();

  const cartAddHandler = (id) => {
    dispatch(cartActions.ADD_ITEMS(id));
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {itemsProduct.map((res) => (
          <ProductItem
            title={res.title}
            price={res.price}
            id={res.id}
            key={res.id}
            cartAddHandler={cartAddHandler.bind(null, res.id)}
            description={res.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
