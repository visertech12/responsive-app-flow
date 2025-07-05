
import React from 'react';

const ListButton = ({ className, children, ...props }) => {
  return (
    <button className={`btn ${className || ''}`} {...props}>
      {children || 'Buy now'}
    </button>
  );
};

export default ListButton;
