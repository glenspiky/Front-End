import React, { useEffect, useState } from "react";
import "./Products.css";
import { useCart } from "../../context/CartContext";
import { SkeletonLoader } from "../Skeleton/Skeleton";
import ProductList from "../ProductList/ProductList";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  // 1. Fetching Logic
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="products-section">
      {loading ? (
        <SkeletonLoader count={8} />
      ) : (
        <ProductList products={products} addToCart={addToCart} />
      )}
    </section>
  );
};
