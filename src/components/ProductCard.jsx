import React from 'react';
import RatingWidget from './RatingWidget';

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', overflow: 'hidden', width: '250px', padding: '15px', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Rating:</strong> {product.avgRating.toFixed(1)} ({product.totalRatings} reviews)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;
