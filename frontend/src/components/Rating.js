import React from "react";
import PropTypes from "prop-types";

const Stars = ({ value, i, color }) => {
  return (
    <span>
      <i
        style={{ color }}
        className={
          value >= i + 1
            ? "fa-solid fa-star"
            : value >= i + 0.5
            ? "fa-solid fa-star-half-alt"
            : "fa-regular fa-star"
        }
      ></i>
    </span>
  );
};

const Rating = ({ numStars, value, text, color }) => {
  return (
    <div className="rating">
      {Array(numStars)
        .fill(1)
        .map((el, i) => (
          <Stars key={i} value={value} i={i} color={color} />
        ))}
      <span> {text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  numStars: 5,
  color: "#fcdb03",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Stars.propTypes = {
  value: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Rating;
