import React from 'react';
import './HeartLike.styles.scss';

const HeartLike = ({ likes, liked, handleSubmitLike }) => {
  return (
    <div className="likes">
      {likes ? likes : `Be the first to like it!`}
      { liked ?
        <img
          onClick={handleSubmitLike}
          className="heart"
          src={require('../../_assets/img/heart-full.png')}
          alt={likes > 1 ? `Hearts` : `Heart`}
        /> :
        <img
          onClick={handleSubmitLike}
          className="heart"
          src={require('../../_assets/img/heart.png')}
          alt={likes > 1 ? `Hearts` : `Heart`}
        />
      }
    </div>
  );
};

export default HeartLike;
