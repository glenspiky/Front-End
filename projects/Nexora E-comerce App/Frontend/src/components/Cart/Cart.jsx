import "./Cart.css";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";
import { useEffect } from "react";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, setCart } = useCart();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  function addToCart(id) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCart(updatedCart);
  }
  function subFromCart(id) {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    setCart(updatedCart);
  }

  function removeFromCart(id) {
    const itemToRemove = cart.find((item) => item.id === id);
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.error(`${itemToRemove?.title || "Item"} removed from cart`, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      icon: "🗑️",
    });
  }

  // Calculate total for the whole cart
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-page-container">
      <div className="cart-main">
        <h1 className="cart-title">Cart ({cart.length})</h1>

        <div className="cart-items-list">
          {cart.length <= 0 ? (
            <div className="empty-cart">
              <h2>Cart is empty</h2>
              <p>Cart is empty go to home page and shop</p>
              <Link to="/">
                <button>Continue shopping</button>
              </Link>
            </div>
          ) : null}
          {cart.map((item, index) => (
            <CartItem
              key={`${item.id}-${index}`}
              item={{ ...item, index }}
              addToCart={addToCart}
              subFromCart={subFromCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      </div>

      <aside className="cart-summary">
        <h2>CART SUMMARY</h2>
        <div className="summary-row">
          <p>Subtotal</p>
          <span className="total-price">KES {subtotal.toLocaleString()}</span>
        </div>

        <button
          className="checkout-btn"
          style={{ cursor: cart.length === 0 ? "not-allowed" : "pointer" }}
        >
          CHECKOUT (KES {subtotal.toLocaleString()})
        </button>
      </aside>
    </div>
  );
};
