import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import "./ProductDetals.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { ProductDetailsSkeleton } from "../../components/Skeleton/Skeleton";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const [gallery, setGallery] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductAndRelated = async () => {
      setLoading(true);
      try {
        // 1. Get the main product
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const mainProduct = await res.json();

        setProduct(mainProduct);
        setGallery(mainProduct.thumbnail);

        // 2. ONLY if i have a category, fetch related items
        if (mainProduct.category) {
          const catRes = await fetch(
            `https://dummyjson.com/products/category/${mainProduct.category}`,
          );
          const catData = await catRes.json();

          // 3. Filter: Remove current ID and limit to 4 items
          const filtered = catData.products
            .filter((item) => item.id !== mainProduct.id)
            .slice(0, 4);

          setRelated(filtered);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    getProductAndRelated();

    window.scrollTo(0, 0);
  }, [id]);
  if (loading) return <ProductDetailsSkeleton />;
  if (!product) return <p>Loading...</p>;
  //rating
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
  //add to cart
  function handleAdd() {
    setCount(count + 1);
  }
  //sub from cart
  //add to cart
  function handleSub() {
    count > 0 ? setCount(count - 1) : null;
  }
  //gallery
  function handleGallery(img) {
    setGallery(img);
  }

  console.log(product);
  return (
    <div className="product-container">
      <div className="product">
        <div className="product-main">
          <div className="product-left">
            <div className="images">
              <div className="main-image">
                <div className="main-image-container">
                  <img src={gallery} alt="product-zoom" className="zoom-img" />
                </div>
                <div className="gallery">
                  {product.images.map((img, index) => {
                    const isSelected = img === gallery;
                    return (
                      <div key={index} onClick={() => handleGallery(img)}>
                        {" "}
                        <img
                          src={img}
                          className={`gallery-item ${isSelected ? "selected-thumb" : ""}`}
                          alt=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="product-center">
            <div className="pro-desc">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>#{product.tags[0]}</p>
              <div className="rating">
                {renderStars(product.rating)} <p>{product.rating} </p> |
                <span>
                  {product.reviews.length > 1 ? product.reviews.length : "No"}{" "}
                  Reviews
                </span>
              </div>
              <div className="offer">
                <h2>
                  Welkcome . SuperDeal<span>Ends: Dec 11, 10:00 </span>
                </h2>
                <div className="offer-desc">
                  <h2>KES {product.price}</h2>

                  <div className="offer-desc-left">
                    <h4>{product.stock} left</h4>
                    <h3>
                      KES{" "}
                      {(
                        product.price /
                        (1 - product.discountPercentage / 100)
                      ).toFixed(0)}
                    </h3>
                  </div>
                  <p>-{product.discountPercentage}%</p>
                </div>
              </div>
              <span>{product.availabilityStatus}</span>
              <p>{product.category}</p>
              <h5>Product sellpoints</h5>
              <ul>
                <li>{product.warrantyInformation}</li>
                <li>{product.returnPolicy}</li>
                <li>{product.shippingInformation}</li>
              </ul>
              <div className="extra-details">
                <div className="specs-container">
                  <h5>Technical Specifications</h5>
                  <div className="specs-grid">
                    <div className="spec-item">
                      <span>Brand</span> <strong>{product.brand}</strong>
                    </div>
                    <div className="spec-item">
                      <span>SKU</span> <strong>{product.sku}</strong>
                    </div>
                    <div className="spec-item">
                      <span>Weight</span> <strong>{product.weight}g</strong>
                    </div>
                    <div className="spec-item">
                      <span>Dimensions</span>{" "}
                      <strong>
                        {product.dimensions.width}x{product.dimensions.height}{" "}
                        cm
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pro-desc-bottom"></div>
            </div>
          </div>
        </div>
        <div className="product-right">
          {/* Purchase Card */}
          <div className="purchase-card">
            <div className="qr-section">
              <img
                src={product.meta.qrCode}
                alt="QR Code"
                className="qr-code"
              />
              <p>Scan to share</p>
            </div>

            <div className="counter-container">
              <p>Quantity</p>
              <div className="counter">
                <button onClick={() => handleSub()}>
                  <i className="ri-subtract-line"></i>
                </button>
                <span>{count}</span>
                <button onClick={() => handleAdd()}>
                  <i className="ri-add-line"></i>
                </button>
              </div>
            </div>
            <div className="add-cart">
              <i className="ri-shopping-basket-fill"></i>
              <p>Add to cart</p>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="reviews-container">
            <h2>Customer Reviews</h2>
            {product.reviews.map((item) => (
              <div key={item.reviewerEmail} className="review-card">
                <div className="review-header">
                  <div className="user-icon">{item.reviewerName.charAt(0)}</div>
                  <div className="user-meta">
                    <strong>{item.reviewerName}</strong>
                    <span>
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
                <div className="review-rating">
                  {/* Static stars for the review rating */}
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={
                        i < item.rating ? "ri-star-fill" : "ri-star-line"
                      }
                    ></i>
                  ))}
                </div>
                <p className="review-comment">"{item.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="related-section">
        <h2>Related Products</h2>
        <div className="products-container">
          {" "}
          {/* Use the same class for styling */}
          {related.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              // addToCart={addToCart}
              renderStars={renderStars}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
