import React, { useEffect, useState } from "react";
import "./Products.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  // 1. Fetching Logic
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=100",
        );
        const data = await response.json();

        // Filter logic:
        const highQualityProducts = data.products.filter((item) => {
          // We use a Set to count only UNIQUE image URLs
          const uniqueImages = new Set(item.images);
          return uniqueImages.size >= 2;
        });
       
        setProducts(highQualityProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
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
              <Link to={`/product/${item.id}`}>
                <img src={item.thumbnail} alt={item.title} />
              </Link>
            </div>
            <div className="pro-desc">
              <h3>{item.title}</h3>
              <h2>KES {item.price.toLocaleString()}</h2>
              <div className="rating">
                {renderStars(item.rating)}
                <span className="rating-num">{item.rating.toFixed(1)}</span>
              </div>
              <div onClick={() => addToCart(item)} className="add-cart">
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
