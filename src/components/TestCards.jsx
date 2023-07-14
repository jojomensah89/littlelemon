import PropTypes from "prop-types";

function TestCards({ rating, name, imageSrc, review }) {
  return (
    <article className="testCard">
      <section id="testCardRating">
        <h3>{rating} Stars</h3>
        <section id="testCardMid">
          <img src={imageSrc} alt="" />
          <h3 id="testCardName">{name}</h3>
        </section>
        <section id="testCardReview"></section>
        <p>{review}</p>
      </section>
    </article>
  );
}

TestCards.propTypes = {
  rating: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default TestCards;
