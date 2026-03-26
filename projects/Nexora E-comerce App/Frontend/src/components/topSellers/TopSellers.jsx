import React, { useState, useEffect, useRef } from "react";
import "./TopSellers.css";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner5 from "../../assets/images/banner5.png";
import banner6 from "../../assets/images/banner6.png";
import banner7 from "../../assets/images/banner7.png";

export const TopSellers = () => {
  // Original banners
  const banners = [banner1, banner2, banner3, banner5, banner6, banner7];

  // Clone first slide for smooth infinite loop
  const slides = [...banners, banners[0]];

  // State
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const transitionRef = useRef(null);

  // Next slide
  const HandleSlideLeft = () => {
    setIsTransitioning(true); // enable transition
    setIndex((prev) => prev + 1);
  };

  // Previous slide (stop at 0)
  const HandleSlideRight = () => {
    if (index === 0) return; // stop at first
    setIsTransitioning(true);
    setIndex((prev) => prev - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      HandleSlideLeft();
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  // Reset index after reaching the cloned slide
  useEffect(() => {
    if (index === slides.length - 1) {
      // wait for transition to end, then jump
      transitionRef.current = setTimeout(() => {
        setIsTransitioning(false); // disable transition for instant jump
        setIndex(0); // reset to real first slide
      }, 500); // match CSS transition duration
    }
    return () => clearTimeout(transitionRef.current);
  }, [index, slides.length]);

  return (
    <div className="top-selers-section">
      <div className="top-sellers">
        {/* Left menu */}
        <div className="top-sellers-left">
          <span className="head">
            <h3>Top Sales</h3>
          </span>
          <ul className="top-items">
            <li>
              <i className="ri-megaphone-line"></i>
              <span>Promos</span>
            </li>
            <li>
              <i className="ri-cake-3-line"></i>
              <span>Snacks</span>
            </li>
            <li>
              <i className="ri-ink-bottle-line"></i>
              <span>Fats & Oils</span>
            </li>
            <li>
              <i className="ri-bowl-line"></i>
              <span>Vegetables</span>
            </li>
            <li>
              <i className="ri-restaurant-2-line"></i>
              <span>Food Additives</span>
            </li>
            <li>
              <i className="ri-goblet-2-line"></i>
              <span>Beverage</span>
            </li>
            <li>
              <i className="ri-hand-sanitizer-line"></i>
              <span>Cleaning</span>
            </li>
            <li>
              <i className="ri-book-2-line"></i>
              <span>Stationery</span>
            </li>
            <li>
              <i className="ri-brush-ai-line"></i>
              <span>Cosmetics</span>
            </li>
          </ul>
        </div>

        {/* Slider */}
        <div className="top-sellers-right">
          <div id="sliderContainer">
            <div className="slide-icons">
              <i
                className="ri-arrow-left-s-line left"
                onClick={HandleSlideRight}
              ></i>

              <div className="slider-container">
                <div
                  className="slide-image"
                  style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: isTransitioning
                      ? "transform 0.5s ease-in-out"
                      : "none",
                  }}
                >
                  {slides.map((banner, i) => (
                    <img key={i} src={banner} className="slide" alt="" />
                  ))}
                </div>
              </div>

              <i
                className="ri-arrow-right-s-line right"
                onClick={HandleSlideLeft}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
