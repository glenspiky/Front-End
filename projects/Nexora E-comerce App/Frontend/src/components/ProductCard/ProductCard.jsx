import AddToCartButton from "../AddToCartButton/AddToCartButton";
import ProductThumbnail from "./ProductThumbnail";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";

export const ProductCard = ({ item, addToCart }) => {
  return (
    <section className="products-section">
      <div className="products-container">
        <div className="product-item" key={item.id}>
          <ProductThumbnail
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
          />
          <div className="pro-desc">
            <ProductTitle title={item.title} />
            <ProductPrice price={item.price} />
            <ProductRating rating={item.rating} />
            <AddToCartButton onClick={() => addToCart(item)} />
          </div>
        </div>
      </div>
    </section>
  );
};
