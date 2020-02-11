import React from 'react';
import ItemContent from '../item-content/ItemContent.component';
import { withRouter } from 'react-router-dom';
import './MenuItem.styles.scss';

const MenuItem = ({ type, description, favoriteBy, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div className="outside-item-container">
      <div className="item-container">
        <div
          className={`${size} menu-item`}
          onClick={() => {
            history.push(`${match.url}${linkUrl}`)
          }}
        >
          <div className="item-front">
            <img
              className="background-image"
              src={imageUrl}
              alt={type}
            />
          </div>
          <div className="item-back">
            <div className="title">
              {`${favoriteBy}'s favorite`}
            </div>
          </div>
        </div>
        <ItemContent
          type={type}
          description={description}
        />
      </div>
    </div>

  )
};

export default withRouter(MenuItem);
