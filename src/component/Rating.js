export default function Rating({ rate }) {
  const star_rating = () => {};
  return (
    <div>
      <div className="star_rating">
        {[...Array(5)].map((star) => {
          if (rate >= 1) {
            rate -= 1;
            return <span className="fa-solid fa-star"></span>;
          } else {
            return <span className="fa-regular fa-star"></span>;
          }
        })}
      </div>
    </div>
  );
}
