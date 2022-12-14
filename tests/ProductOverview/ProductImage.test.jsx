import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductImage from '../../Client/src/components/ProductDetails/ProductImage.jsx';
import { dummyStyles, dummyDefaultStyle, dummyProductData, dummyRating, dummyReviewMeta } from './DummyData.js'

describe('Carousel renders 7 images & exists', () => {
  it('should render the carousel', () => {
    render(
      <ProductImage
        styles={dummyStyles}
        defaultStyle={dummyDefaultStyle}
        productData={dummyProductData}
        rating={dummyRating}
        reviewMeta={dummyReviewMeta}
      />
    );

    expect(screen.getAllByTestId('carousel')).toBeTruthy()
  })

  it('should render correct number of thumbnails', () => {
    render(
      <ProductImage
        styles={dummyStyles}
        defaultStyle={dummyDefaultStyle}
        productData={dummyProductData}
        rating={dummyRating}
        reviewMeta={dummyReviewMeta}
      />
    );

    expect(screen.getAllByTestId('thumbnails')).toHaveLength(7)
  });
});