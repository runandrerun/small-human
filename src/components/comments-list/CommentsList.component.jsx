import React, { Component } from 'react';
import Comment from '../comment/Comment.component';
import { connect } from 'react-redux';
import { submitCommentLike } from '../../actions';
import './CommentsList.styles.scss';



class CommentsList extends Component {

  state = {
    commentLiked: false,
  }

  handleSubmitLike = (e) => {
    const { dispatch, plantId } = this.props;
    let commentId = e.target.dataset.id;
    e.preventDefault();
    this.setState({
      commentLiked: !this.state.commentLiked
    })
    return dispatch(submitCommentLike(plantId, commentId));
  };

  render() {
    const { comments } = this.props;
    return (
      <div className="comments-list">
        <div className="title">
          Comments
        </div>
        <ul>
        { comments.length >= 1 ?
          comments.map(({ id, ...commentProps}) => {
            return (
              <li key={`${id}-${commentProps.comment}`}>
                <Comment
                  id={id}
                  handleSubmitLike={this.handleSubmitLike}
                  {...commentProps}
                />
              </li>
            )
          }) :
          'There are no comments!'
        }
        </ul>
      </div>
    );
  };
};

export default connect()(CommentsList);
