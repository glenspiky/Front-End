import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { SkeletonLoader } from "../../components/Skeleton/Skeleton";
import ProductItem from "../../components/ProductItem/ProductItem";

export default function SearchResults() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q");
  const { addToCart } = useCart();

  useEffect(() => {
    if (!searchTerm) return;

    const fetchResults = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`,
        );
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [searchTerm]);

  return (
    <div>
      <h2>Results for "{searchTerm}"</h2>

      {loading && <SkeletonLoader count={8} />}

      {!loading && products.length === 0 && <p>No products found</p>}

      {!loading && products.length > 0 && (
        <section className="products-section">
          <div className="products-container">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                item={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
