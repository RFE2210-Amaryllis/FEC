import axios from 'axios';
import * as React from 'react';
import MainRnR from './RnR/MainRnR.jsx';
import MainView from './ProductDetails/MainView.jsx'

const { useState, useEffect } = React;

export default function App() {
  const [productID, setProductID] = useState('37312');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [product, setProduct] = useState(37311);
  const [productData, setProductData] = useState({});
  const [metaData, setMetaData] = useState({});
  
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
  
  const getProductData = (productId) => {
    axios.get('/products/:product_id', {
      params: {
        'id': productId
      },
    })
    .then((response) => {
      setStars(createStars(rating));
      let newProduct = response.data
      setProductData(newProduct)
    })
    .catch((error) => {
      console.log('Error in client from get request', error);
    });
  }


  const getReviewMeta = (productId) => {
    axios.get('/reviews/meta', {
      params: {
        'id': productId
      },
    })
    .then((response) => {
      console.log('Succesful request for meta data');
      setMetaData(response.data);
    })
    .catch((error) => {
      console.log('Error in client from get request', error);
    });
  }


  useEffect(() => {
    getProductData(product);
    getReviewMeta(product);
    getReviews(productID);
    //getreviews
    //get question stuff
  }, []);

  return (
    <div id= 'app'>
      <MainView
        product={product}
        productData={productData}
        reviewMeta={metaData} />

      <MainRnR rating={rating} reviews={reviews} productID={productID}/>
    </div>
  );
}
