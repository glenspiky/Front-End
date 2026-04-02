import React from "react";
import { useWishlist } from "../../context/WishListContext";
export const Wishlist = ({ product }) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const active = isInWishlist(product.id);
  return (
    <button
      style={{ color: active ? "red" : "grey" }}
      onClick={() => toggleWishlist(product)}
    >
      <i className="ri-heart-fill"></i>
    </button>
  );
};
