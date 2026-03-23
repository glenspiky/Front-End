import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q");

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
      {loading && <p>Loading...</p>}
      {!loading && products.length === 0 && <p>No products found</p>}

      <div className="results-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
