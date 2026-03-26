import { renderStars } from "../../utils/Stars";

const ProductRating = ({ rating }) => (
  <div className="rating">
    {renderStars(rating)}
    <span className="rating-num">{Number(rating).toFixed(1)}</span>
  </div>
);

export default ProductRating;
