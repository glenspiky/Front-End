import React, { useEffect } from "react";
import logo from "../../assets/icons/nexora-pri.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export const Navbar = () => {
  const { cart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [productsSearch, setProductsSearch] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }
      //display items
      if (!searchTerm) return;
      fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => setSuggestions(data.products.slice(0, 5)));
    }, 500);
    return () => clearTimeout(delay);
  }, [searchTerm]);

const handleSearch = (e) => {
  e.preventDefault();
  if (searchTerm.trim() === "") return; // do nothing if empty
  navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
};
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <Link to="/">
            <img src={logo} alt="logo" className="nav-logo" />
          </Link>

          <div className="search-bar">
            <i className="ri-search-line"></i>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                id="search"
              />
              {suggestions.length > 0 && (
                <div className="suggestions-box">
                  {suggestions.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSearchTerm(item.title);
                        setSuggestions([]);
                        navigate(`/search?q=${encodeURIComponent(item.title)}`);
                      }}
                      className="suggestion-item"
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              )}
              <button type="submit">Search</button>
            </form>
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
    </>
  );
};
