import { Link } from "react-router-dom";

export const ProductCard = ({ item, addToCart, renderStars }) => {
  return (
    <section className="products-section">
      <div className="products-container">
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
      </div>
    </section>
  );
};
