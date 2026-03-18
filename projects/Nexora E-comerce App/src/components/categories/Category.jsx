import React from "react";
import "./Category.css";

export const Category = () => {
  return (
    <div className="hero-section">
      <div className="categories">
        <div className="categories-container">
          <div  className="cat-left">
            <span id="mobile"></span>
            <i className="ri-equalizer-line"></i>
            <p>Category</p>
          </div>
          <ul className="cat-center" id="catCenter">
            <button id="close">
              <i className="ri-close-large-line"></i>
            </button>

            <li className="cat-item">
              <i className="ri-t-shirt-2-line"></i>
              <p>Outfits</p>
            </li>
            <li className="cat-item">
              <i className="ri-smartphone-line"></i>
              <p>Smartphones</p>
            </li>
            <li className="cat-item">
              <i className="ri-bowl-line"></i>
              <p>Groceries</p>
            </li>
            <li className="cat-item">
              <i className="ri-macbook-line"></i>
              <p>Laptops</p>
            </li>
            <li className="cat-item">
              <i className="ri-time-line"></i>
              <p>Watches</p>
            </li>
            <li className="cat-item">
              <i className="ri-yuque-line"></i>
              <p>Footwear</p>
            </li>
            <li className="cat-item">
              <i className="ri-glasses-line"></i>
              <p>Glases</p>
            </li>
          </ul>
          <div className="cat-right">
            <p>Walet Bal</p>
            <span>KES 0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
