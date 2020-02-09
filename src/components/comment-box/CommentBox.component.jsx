import React from 'react';
import './CommentBox.styles.scss';

const CommentBox = ({ comment, handleCommentChange, handleCommentSubmit, isDisabled }) => {
  return (
    <div className="comment-box">
      <textarea
        type="text"
        rows="4"
        cols="20"
        wrap="hard"
        placeholder="Leave a comment!"
        onChange={handleCommentChange}
      />
      <button
        disabled={isDisabled || comment === ''}
        onClick={handleCommentSubmit}
      >
        {isDisabled ? "Comment submitted!" : "Submit"}
      </button>
    </div>
  );
};

export default CommentBox;
