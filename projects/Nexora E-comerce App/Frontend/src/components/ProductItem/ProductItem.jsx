import React from "react";
import ProductThumbnail from "../ProductCard/ProductThumbnail";
import ProductTitle from "../ProductCard/ProductTitle";
import ProductPrice from "../ProductCard/ProductPrice";
import ProductRating from "../ProductCard/ProductRating";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ProductItem = ({ item, addToCart }) => {
  return (
    <div className="product-item" key={item.id}>
      <ProductThumbnail
        id={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
      />
      <div className="pro-desc">
        <ProductTitle title={item.title} />
        <ProductPrice price={item.price} />
        <ProductRating rating={item.rating} />
        <AddToCartButton onClick={() => addToCart(item)} />
      </div>
    </div>
  );
};

export default ProductItem;
