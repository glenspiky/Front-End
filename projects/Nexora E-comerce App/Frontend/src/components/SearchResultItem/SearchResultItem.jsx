import { Link } from "react-router-dom";
import ProductTitle from "../ProductCard/ProductTitle";
import ProductPrice from "../ProductCard/ProductPrice";

const SearchResultItem = ({ product }) => (
  <Link to={`/product/${product.id}`} className="product-card">
    <img src={product.thumbnail} alt={product.title} />
    <ProductTitle title={product.title} />
    <ProductPrice price={product.price} />
  </Link>
);

export default SearchResultItem;
