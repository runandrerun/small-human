import React from 'react';
import './CommentsList.styles.scss';

const CommentsList = ({ comments }) => {
  return (
    <div className="comments-list">
      <div className="title">
        Comments
      </div>
      <ul>
      {
        comments.map((comment, i) => {
          return <li key={i}>{comment}</li>
        })
      }
      </ul>
    </div>
  );
};

export default CommentsList;
