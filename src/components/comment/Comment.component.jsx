import React from 'react';
import HeartLike from '../heart-like/HeartLike.component';
import './Comment.styles.scss';

const Comment = ({ id, comment, likes, userLiked, handleSubmitLike }) => {
  return (
    <div className="comment">
      {comment}
      <HeartLike
        id={id}
        liked={userLiked}
        handleSubmitLike={handleSubmitLike}
        likes={likes}
      />
    </div>
  );
};

export default Comment;
