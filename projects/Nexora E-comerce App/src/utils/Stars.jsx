export const renderStars = (rating) => {
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
};
