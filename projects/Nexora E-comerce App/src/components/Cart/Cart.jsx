import "./Cart.css";
import { useCart } from "../../context/CartContext";

export const Cart = () => {
  const { cart, setCart } = useCart();
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
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
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
          {cart.length<=0?<h2>Cart is emty</h2>:null}
          {cart.map((item, index) => {
            return (
              <div className="cart-item" key={`${item.id}-${index}`}>
                
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
          })}
        </div>
      </div>

      <aside className="cart-summary">
        <h2>CART SUMMARY</h2>
        <div className="summary-row">
          <p>Subtotal</p>
          <span className="total-price">KES {subtotal.toLocaleString()}</span>
        </div>

        <button className="checkout-btn">
          CHECKOUT (KES {subtotal.toLocaleString()})
        </button>
      </aside>
    </div>
  );
};
