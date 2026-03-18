import React, { useEffect, useState } from "react";
import "./Products.css";
import {useCart} from '../../context/CartContext'

export const Products = () => {
  const [products, setProducts] = useState([]);
  const {addToCart}=useCart()

  // 1. Fetching Logic
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  // 2. Helper Logic (Stars)
  function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={i <= Math.round(rating) ? "ri-star-fill" : "ri-star-line"}
        ></i>,
      );
    }
    return stars;
  }

  return (
    <section className="products-section">
      <div className="products-container">
        {products.map((item) => (
          <div className="product-item" key={item.id}>
            <div className="pro-img">
              <img src={item.images[0]} alt={item.title} />
            </div>
            <div className="pro-desc">
              <h3>{item.title}</h3>
              <h2>KES {item.price.toLocaleString()}</h2>
              <div className="rating">
                {renderStars(item.rating)}
                <span className="rating-num">{item.rating.toFixed(1)}</span>
              </div>
              <div onClick={()=>addToCart(item)} className="add-cart">
                <i className="ri-shopping-basket-fill"></i>
                <p>Add to cart</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
