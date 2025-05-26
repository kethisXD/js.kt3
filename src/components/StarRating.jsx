import React from 'react';

function StarRating({ rating }) {
  const rounded = Math.round(rating);
  const stars = Array.from({ length: 5 }, (_, i) => i < rounded ? '★' : '☆').join('');

  return <span>{stars}</span>;
}

export default StarRating;