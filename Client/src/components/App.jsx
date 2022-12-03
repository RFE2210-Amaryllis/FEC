import axios from 'axios';
import * as React from 'react';
import MainRnR from './RnR/MainRnR.jsx';

const { useState, useEffect } = React;

export default function App() {
  const [data, setData] = useState([]);
  const [productID, setProductID] = useState('37312');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const averageRating = (arrOfRatings) => {
    var result = 0;

    for (let i = 0; i < arrOfRatings.length; i++) {
      result += arrOfRatings[i].rating
    }
    return (result/arrOfRatings.length);
  }

  const getReviews = (id) => {
    axios.get('/reviews', {
      params: {
        product_id: id,
      },
    })
      .then((response) => {
        setReviews(response.data.results);
        setRating(averageRating(response.data.results));
      })
      .catch((error) => {
        console.log('Error retrieving reviews');
      })
  }

  useEffect(() => {
    getReviews(productID);
  }, []);

  return (
    <div>
      <h1>test</h1>
      <MainRnR rating={rating} reviews={reviews} productID={productID}/>
    </div>
  );
}
