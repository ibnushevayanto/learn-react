import { Link } from "react-router-dom";

const Products = () => (
  <div>
    <h1>Products Page</h1>
    <ul>
      <li>
        <Link to="/products/detail/food">A Food</Link>
      </li>
      <li>
        <Link to="/products/detail/book">A Book</Link>
      </li>
      <li>
        <Link to="/products/detail/man">A Man</Link>
      </li>
    </ul>
  </div>
);

export default Products;
