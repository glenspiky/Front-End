import React from "react";
import logo from "../../assets/icons/nexora-pri.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


export const Navbar = () => {
  const { cart } = useCart()

  return (
    <div>
      <div className="navbar-container">
        <div className="navbar">
          <img src={logo} alt="logo" />
          <div className="search-bar">
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Search products, brands and categories"
              id="search"
            />
            <button type="submit">Search</button>
          </div>
          <div className="location">
            <i className="ri-map-pin-line"></i>
            <p>location</p>
          </div>
          <div className="account-wrapper">
            <div className="account">
              <i className="ri-user-3-line"></i>
              <span>
                <p>Account</p>
                <i className="ri-arrow-drop-down-line"></i>
              </span>
            </div>
            <div className="acc-container"></div>
          </div>

          <div className="help-wrapper">
            <div className="help">
              <i className="ri-question-line"></i>
              <span>
                <p>Help</p>
                <i className="ri-arrow-drop-down-line"></i>
              </span>
            </div>
            <div className="help-container"></div>
          </div>
          <Link to="/cart" className="cart">
            {cart.length> 0 && (
              <span id="cartValue">{cart.length}</span>
            )}

            <i className="ri-shopping-cart-2-line"></i>
            <p>Cart</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
