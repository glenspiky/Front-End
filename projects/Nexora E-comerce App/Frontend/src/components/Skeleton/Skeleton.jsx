import React from "react";
import "./Skeleton.css";

export const ProductSkeleton = () => {
  return (
    <div className="skeleton-product">
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-price"></div>
        <div className="skeleton-rating"></div>
        <div className="skeleton-button"></div>
      </div>
    </div>
  );
};

export const NavbarSkeleton = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="skeleton-nav-logo"></div>
        <div className="skeleton-search-bar">
          <div className="skeleton-search-input"></div>
          <div className="skeleton-search-btn"></div>
        </div>
        <div className="nav-right-actions">
          <div className="account-wrapper">
            <div className="skeleton-account"></div>
          </div>
          <div className="help-wrapper">
            <div className="skeleton-help"></div>
          </div>
          <div className="skeleton-cart"></div>
        </div>
      </div>
    </div>
  );
};

export const CategorySkeleton = () => {
  return (
    <div className="hero-section">
      <div className="categories">
        <div className="categories-container">
          <div className="skeleton-cat-left">
            <div className="skeleton-cat-icon"></div>
            <div className="skeleton-cat-text"></div>
          </div>
          <ul className="skeleton-cat-center">
            {[...Array(7)].map((_, i) => (
              <li key={i} className="skeleton-cat-item">
                <div className="skeleton-cat-item-icon"></div>
                <div className="skeleton-cat-item-text"></div>
              </li>
            ))}
          </ul>
          <div className="skeleton-cat-right">
            <div className="skeleton-wallet-text"></div>
            <div className="skeleton-wallet-amount"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TopSellersSkeleton = () => {
  return (
    <div className="top-selers-section">
      <div className="top-sellers">
        <div className="top-sellers-left">
          <div className="skeleton-top-sales-header"></div>
          <ul className="skeleton-top-items">
            {[...Array(9)].map((_, i) => (
              <li key={i} className="skeleton-top-item">
                <div className="skeleton-top-item-icon"></div>
                <div className="skeleton-top-item-text"></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="top-sellers-right">
          <div className="skeleton-slider-container">
            <div className="skeleton-slider-image"></div>
            <div className="skeleton-slider-controls">
              <div className="skeleton-slider-btn-left"></div>
              <div className="skeleton-slider-btn-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FooterSkeleton = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="skeleton-footer-brand">
          <div className="skeleton-footer-logo"></div>
          <div className="skeleton-footer-desc"></div>
          <div className="skeleton-social-links">
            <div className="skeleton-social-icon"></div>
            <div className="skeleton-social-icon"></div>
            <div className="skeleton-social-icon"></div>
            <div className="skeleton-social-icon"></div>
          </div>
        </div>
        <div className="skeleton-footer-links">
          <div className="skeleton-footer-heading"></div>
          <div className="skeleton-footer-list">
            <div className="skeleton-footer-link"></div>
            <div className="skeleton-footer-link"></div>
            <div className="skeleton-footer-link"></div>
            <div className="skeleton-footer-link"></div>
          </div>
        </div>
        <div className="skeleton-footer-links">
          <div className="skeleton-footer-heading"></div>
          <div className="skeleton-footer-list">
            <div className="skeleton-footer-link"></div>
            <div className="skeleton-footer-link"></div>
            <div className="skeleton-footer-link"></div>
            <div className="skeleton-footer-link"></div>
          </div>
        </div>
        <div className="skeleton-footer-newsletter">
          <div className="skeleton-footer-heading"></div>
          <div className="skeleton-newsletter-desc"></div>
          <div className="skeleton-newsletter-form">
            <div className="skeleton-newsletter-input"></div>
            <div className="skeleton-newsletter-btn"></div>
          </div>
        </div>
      </div>
      <div className="skeleton-footer-bottom">
        <div className="skeleton-footer-copyright"></div>
        <div className="skeleton-payment-icons">
          <div className="skeleton-payment-icon"></div>
          <div className="skeleton-payment-icon"></div>
          <div className="skeleton-payment-icon"></div>
        </div>
      </div>
    </footer>
  );
};

export const ProductDetailsSkeleton = () => {
  return (
    <div className="product-container">
      <div className="product">
        <div className="product-main">
          <div className="product-left">
            <div className="skeleton-main-image"></div>
            <div className="skeleton-gallery">
              <div className="skeleton-gallery-item"></div>
              <div className="skeleton-gallery-item"></div>
              <div className="skeleton-gallery-item"></div>
              <div className="skeleton-gallery-item"></div>
            </div>
          </div>
          <div className="product-center">
            <div className="skeleton-pro-desc">
              <div className="skeleton-title-large"></div>
              <div className="skeleton-description"></div>
              <div className="skeleton-tag"></div>
              <div className="skeleton-rating-line"></div>
              <div className="skeleton-offer-box"></div>
              <div className="skeleton-availability"></div>
              <div className="skeleton-category"></div>
              <div className="skeleton-specs-grid">
                <div className="skeleton-spec-item"></div>
                <div className="skeleton-spec-item"></div>
                <div className="skeleton-spec-item"></div>
                <div className="skeleton-spec-item"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-right">
          <div className="skeleton-purchase-card">
            <div className="skeleton-qr"></div>
            <div className="skeleton-counter"></div>
            <div className="skeleton-add-cart-btn"></div>
          </div>
          <div className="skeleton-reviews">
            <div className="skeleton-review-title"></div>
            <div className="skeleton-review-card"></div>
            <div className="skeleton-review-card"></div>
          </div>
        </div>
      </div>
      <div className="related-section">
        <div className="skeleton-related-title"></div>
        <div className="skeleton-related-products">
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
      </div>
    </div>
  );
};

export const SkeletonLoader = ({ count = 8 }) => {
  return (
    <div className="skeleton-container">
      {Array.from({ length: count }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};
