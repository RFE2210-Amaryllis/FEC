import React from 'react';
import PropTypes from 'prop-types';

const Ratings = ({ rating, stars }) => (
  <div>
    <p>{rating}</p>
    <p>{stars.length}</p>
  </div>
);

Ratings.propTypes = {
  rating: PropTypes.number.isRequired,
  stars: PropTypes.array.isRequired,
};

export default Ratings;
