import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="logo">
            NEX<span>ORA</span>
          </h2>
          <p>
            Your one-stop shop for the latest trends and tech. Quality products
            delivered to your doorstep.
          </p>
          <div className="social-links">
            <a href="#">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-x-line"></i>
            </a>
            <a href="#">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#">
              <i className="ri-youtube-fill"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Shopping</h4>
          <ul>
            <li>
              <a href="#">Clothing Store</a>
            </li>
            <li>
              <a href="#">Trending Shoes</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
            <li>
              <a href="#">Sale & Offers</a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-links">
          <h4>Customer Care</h4>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Payment Methods</a>
            </li>
            <li>
              <a href="#">Delivery & Returns</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Subscribe</h4>
          <p>Be the first to know about new arrivals and promotions!</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button type="button">Join</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 ShopLane. All rights reserved.</p>
        <div className="payment-icons">
          <i className="ri-visa-line"></i>
          <i className="ri-mastercard-line"></i>
          <i className="ri-paypal-line"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
