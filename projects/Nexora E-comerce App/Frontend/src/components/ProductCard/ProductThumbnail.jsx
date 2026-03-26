import { Link } from "react-router-dom";

const ProductThumbnail = ({ id, thumbnail, title }) => (
  <div className="pro-img">
    <Link to={`/product/${id}`}>
      <img src={thumbnail} alt={title} />
    </Link>
  </div>
);

export default ProductThumbnail;
