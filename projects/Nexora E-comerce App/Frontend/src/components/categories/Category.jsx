import { useEffect, useState } from "react";
import "./Category.css";

export const Category = () => {
  const [isMobile, setIsMobile] = useState(false);
  function handleClick() {
    setIsMobile(true);
  }
  function handleClose() {
    setIsMobile(false);
  }
  // disable scroling
  useEffect(() => {
    // if (isMobile) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "auto";
    // }
  },[isMobile]);
  return (
    <>
      <div className="hero-section">
        <div className="categories">
          <div className="categories-container">
            <div className="cat-left" onClick={() => handleClick()}>
              <span id="mobile"></span>
              <i className="ri-equalizer-line"></i>
              <p>Category</p>
            </div>
            {/* ! over lay */}
            {isMobile && (
              <div
                className="overlay"
                onClick={() => {
                  setIsMobile(false);
                }}
              />
            )}
            <ul
              className="cat-center"
              style={{ display: isMobile ? "flex" : "none" }}
              id="catCenter"
            >
              <button id="close" onClick={() => handleClose()}>
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
    </>
  );
};
