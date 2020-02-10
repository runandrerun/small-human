import React from 'react';
import './HeartLike.styles.scss';

const HeartLike = ({ id, likes, liked, handleSubmitLike }) => {
  return (
    <span className="likes">
      {likes}
      { liked ?
        <img
          onClick={handleSubmitLike}
          data-id={id}
          className="heart"
          src={require('../../_assets/img/heart-full.png')}
          alt={likes > 1 ? `Hearts` : `Heart`}
        /> :
        <img
          onClick={handleSubmitLike}
          data-id={id}
          className="heart"
          src={require('../../_assets/img/heart.png')}
          alt={likes > 1 ? `Hearts` : `Heart`}
        />
      }
    </span>
  );
};

export default HeartLike;
