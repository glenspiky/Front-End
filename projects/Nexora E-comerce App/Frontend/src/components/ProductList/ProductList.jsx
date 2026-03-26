import React from "react";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="products-container">
      {products.map((item) => (
        <ProductItem key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
