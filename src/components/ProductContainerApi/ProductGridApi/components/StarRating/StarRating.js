function StarRating({ rating }) {
  const stars = [];

  let i = 0;
  for (i; i < rating; i++) {
    stars.push(<i key={i} className="fa-solid fa-star"></i>);
  }
  for (i; i < 5; i++) {
    stars.push(<i key={i} className="fa-regular fa-star"></i>);
  }

  return <>{stars}</>;
}

export default StarRating;
