
const AddToCartButton = ({
  onClick,
  label = "Add to cart",
  className = "",
}) => {
  return (
    <div onClick={onClick} className={`add-cart ${className}`.trim()}>
      <i className="ri-shopping-basket-fill"></i>
      <p>{label}</p>
    </div>
  );
};

export default AddToCartButton;
