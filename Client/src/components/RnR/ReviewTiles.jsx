import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';

const ReviewTiles = ({reviews, rating}) => {
  console.log({reviews});

  return (
    <div>
      {reviews.map((review, index) => {
        return <ReviewEntry review={review} key={index}/>
      })}
    </div>
  )};

export default ReviewTiles;
