import React from "react";
import logo from "../../assets/icons/nexora-pri.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export const Navbar = () => {
  const { cart } = useCart();

  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </Link>

        <div className="search-bar">
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search products..." id="search" />
          <button type="submit">Search</button>
        </div>

        <div
          className="nav-right-actions"
          style={{ display: "flex", gap: "15px", alignItems: "center" }}
        >
          <div className="account-wrapper">
            <div className="account">
              <i className="ri-user-3-line"></i>
              <span>
                <p>Account</p>
                <i className="ri-arrow-drop-down-line"></i>
              </span>
            </div>
          </div>

          <div className="help-wrapper">
            <div className="help">
              <i className="ri-question-line"></i>
              <span>
                <p>Help</p>
                <i className="ri-arrow-drop-down-line"></i>
              </span>
            </div>
          </div>

          <Link to="/cart" className="cart">
            <div style={{ position: "relative" }}>
              <i className="ri-shopping-cart-2-line"></i>
              {cart.length > 0 && <span id="cartValue">{cart.length}</span>}
            </div>
            <p>Cart</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
