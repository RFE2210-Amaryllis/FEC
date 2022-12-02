import React from 'react';
import PropTypes from 'prop-types';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

const MainRnR = ({ rating, stars }) => (
  <>
    <h1> Ratings & Reviews </h1>

    <div>
      <Ratings  rating={rating} stars={stars} />
    </div>

    <div>
      <Reviews />
    </div>
  </>
);

MainRnR.propTypes = {
  rating: PropTypes.number.isRequired,
  stars: PropTypes.array.isRequired,
};

export default MainRnR;
