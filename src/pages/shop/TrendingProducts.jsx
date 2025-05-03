import React, { useState } from 'react';
import ProductCards from './ProductCards';
import products from '../../data/products.json';

const TrendingProducts = () => {
  const initialCount = 8;
  const [visibleProducts, setVisibleProducts] = useState(initialCount);

  const toggleProducts = () => {
    if (visibleProducts >= products.length) {
      setVisibleProducts(initialCount); // Show less
    } else {
      setVisibleProducts(prevCount => Math.min(prevCount + 4, products.length)); // Load more
    }
  };

  return (
    <section className='section__container product__container'>
      <h2 className='section__header'>Trending Products</h2>

      {/* products card */}
      <div className='mt-12'>
        <ProductCards products={products.slice(0, visibleProducts)} />
      </div>

      {/* toggle button */}
      <div className='product__btn'>
        <button className='btn' onClick={toggleProducts}>
          {visibleProducts >= products.length ? 'Show Less' : 'Load More'}
        </button>
      </div>
    </section>
  );
};

export default TrendingProducts;
