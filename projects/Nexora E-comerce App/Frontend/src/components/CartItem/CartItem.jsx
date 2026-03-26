import React from "react";

const CartItem = ({ item, addToCart, subFromCart, removeFromCart }) => {
  return (
    <div className="cart-item" key={`${item.id}-${item.index || 0}`}>
      <div className="cart-item-left">
        <div className="cart-image-right">
          <div className="cart-image">
            <img src={item.images[0]} alt={item.title} />
          </div>
          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            <i className="ri-delete-bin-line"></i> REMOVE
          </button>
        </div>
      </div>
      <div className="item-details">
        <h2>{item.title}</h2>
        <p className="brand">{item.brand}</p>
        <p className="status">{item.availabilityStatus}</p>
      </div>
      <div className="cart-item-right">
        <div className="price-section">
          <h2>KES {(item.price * item.quantity).toLocaleString()}</h2>
          {item.discountPercentage && (
            <p className="discount">
              <span className="old-price">
                KES{" "}
                {(
                  (item.price * item.quantity) /
                  (1 - item.discountPercentage / 100)
                ).toFixed(0)}
              </span>
              <span className="percent">
                -{Math.floor(item.discountPercentage)}%
              </span>
            </p>
          )}
        </div>
        <div className="quantity-controls">
          <button onClick={() => subFromCart(item.id)}>
            <i className="ri-subtract-line"></i>
          </button>
          <span>{item.quantity}</span>
          <button className="add" onClick={() => addToCart(item.id)}>
            <i className="ri-add-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
