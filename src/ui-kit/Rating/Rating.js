import React from 'react';
import ReactStars from 'react-rating-stars-component';

export const Rating = ({ activeColor, count, size, onChange }) => {
  return (
    <ReactStars
      activeColor={activeColor}
      count={count}
      size={size}
      onChange={onChange}
    />
  );
};
