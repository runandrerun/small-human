import React from 'react';
import './ItemContent.styles.scss';

export const ItemContent = ({ type, description }) => {
  return (
    <div className="item-content">
      <span className="type">
        {type}
      </span>
      <div className="description">
        {description}
      </div>
    </div>
  );
};

export default ItemContent;
