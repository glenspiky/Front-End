import React, { useEffect, useRef } from "react";
import logo from "../../assets/icons/nexora-pri.png";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export const Navbar = () => {
  const { cart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  // const [productsSearch, setProductsSearch] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const [isAccContainerOpen, setIsAccContainerOpen] = useState(false);
  const [isHelpContainerOpen, setIsHelpContainerOpen] = useState(false);
  const accBox = useRef();
  const helpBox = useRef();
  //? outside click
  useEffect(() => {
    const handleClick = (e) => {
      // Close account if click is outside
      if (accBox.current && !accBox.current.contains(e.target)) {
        setIsAccContainerOpen(false);
      }
      // Close help if click is outside
      if (helpBox.current && !helpBox.current.contains(e.target)) {
        setIsHelpContainerOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  //disable scrolling
  useEffect(() => {
    if (isAccContainerOpen || isHelpContainerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isAccContainerOpen, isHelpContainerOpen]);
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
    setSuggestions([]); // hide dropdown after search
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };
  //? Account container
  function accContainer() {
    setIsAccContainerOpen(true);
    setIsHelpContainerOpen(false);
  }
  //? Help container
  function helpContainer() {
    setIsHelpContainerOpen(true);
    setIsAccContainerOpen(false);
  }

  return (
    <>
      {/* ! over lay */}
      {(isAccContainerOpen || isHelpContainerOpen) && (
        <div
          className="overlay"
          onClick={() => {
            setIsAccContainerOpen(false);
            setIsHelpContainerOpen(false);
          }}
        />
      )}
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
                autoComplete="off"
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
            <div
              className="account-wrapper"
              style={{
                backgroundColor: isAccContainerOpen
                  ? "lightgrey"
                  : "transparent",
              }}
              onClick={(e) => {
                e.stopPropagation();
                accContainer();
              }}
            >
              <div className="account">
                <i className="ri-user-3-line"></i>
                <span>
                  <p>Account</p>
                  <i className="ri-arrow-drop-down-line"></i>
                </span>
              </div>
              <div
                ref={accBox}
                className="acc-container"
                style={{ display: isAccContainerOpen ? "flex" : "none" }}
              >
                {isAccContainerOpen ? (
                  <>
                    <Link to="/login">
                      <button>Sign In</button>
                    </Link>
                    <span>
                      <i className="ri-user-3-line"> </i>
                      <p>My Account</p>
                    </span>
                    <span>
                      <i className="ri-shopping-bag-3-line"></i>
                      <p>Orders</p>
                    </span>
                    <span>
                      <i className="ri-heart-line"></i>
                      <p>Wish List</p>
                    </span>
                  </>
                ) : null}
              </div>
            </div>
            <div
              className="help-wrapper"
              style={{
                backgroundColor: isHelpContainerOpen
                  ? "lightgrey"
                  : "transparent",
              }}
              onClick={(e) => {
                e.stopPropagation();
                helpContainer();
              }}
            >
              <div className="help">
                <i className="ri-question-line"></i>
                <span>
                  <p>Help</p>
                  <i className="ri-arrow-drop-down-line"></i>
                </span>
              </div>
              <div
                className="help-container"
                style={{ display: isHelpContainerOpen ? "flex" : "none" }}
                ref={helpBox}
              >
                {isHelpContainerOpen ? (
                  <>
                    <span>
                      <i className="ri-questionnaire-line"></i>
                      <p>Help Center</p>
                    </span>

                    <span>
                      <i className="ri-shopping-bag-3-line"></i>
                      <p>Place your Order</p>
                    </span>

                    <span>
                      <i className="ri-bank-card-line"></i>
                      <p>Payment Options</p>
                    </span>

                    <span>
                      <i className="ri-refund-line"></i>
                      <p>Returns & Refunds</p>
                    </span>

                    <span>
                      <i className="ri-bank-card-line"></i>
                      <p>Warranty</p>
                    </span>

                    <button>
                      <i className="ri-message-2-line"></i>
                      Live Chat
                    </button>
                  </>
                ) : null}
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
