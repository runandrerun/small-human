import React, { Component } from 'react';
import CommentBox from '../comment-box/CommentBox.component.jsx';
import CommentsList from '../comments-list/CommentsList.component.jsx';
import HeartLike from '../heart-like/HeartLike.component.jsx';
import history from '../../history';
import { connect } from 'react-redux';
import { findPlant, submitComment, submitLike } from '../../actions';
import { withRouter } from 'react-router-dom';
import './ShopItem.styles.scss';

class ShopItem extends Component {

  state = {
    comment: '',
    liked: false,
    commentPosted: false
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    history.push({ pathname: `/small-human/shop/${match.params.shopId}` });
    return dispatch(findPlant(match.params.shopId));
  };

  handleCommentChange = (e) => {
    e.preventDefault();
    this.setState({
      comment: e.target.value
    });
  };

  handleCommentSubmit = (e) => {
    const { dispatch, selectedPlant } = this.props;
    let { comment } = this.state;
    e.preventDefault();
    this.setState({
      commentPosted: true
    });
    return dispatch(submitComment(selectedPlant.id, comment));
  };

  handleSubmitLike = (e) => {
    const { dispatch, selectedPlant } = this.props;
    this.setState({
      liked: true
    });
    e.preventDefault();
    return dispatch(submitLike(selectedPlant.id));
  };

  render() {
    const { selectedPlant } = this.props;
    const { comment, commentPosted } = this.state;
      return (
        <div className="shop-item">
          <div className="item-image-container">
            <img
              src={selectedPlant.imageUrl}
              alt={selectedPlant.type}
            />
          </div>
          <div className="item-content">
            <div className="type">
              {selectedPlant.type}
            </div>
            <div className="description">
              {selectedPlant.description}
            </div>
            <HeartLike
              handleSubmitLike={this.handleSubmitLike}
              likes={selectedPlant.likes}
              liked={selectedPlant.userLiked}
            />
            <CommentBox
              comment={comment}
              isDisabled={commentPosted}
              handleCommentChange={this.handleCommentChange}
              handleCommentSubmit={this.handleCommentSubmit}
            />
            { selectedPlant.comments ?
              <CommentsList
                plantId={selectedPlant.id}
                comments={selectedPlant.comments}
              />  :
              "No comments yet!"
            }
          </div>
        </div>
      );
  };
};

const mapStateToProps = (state) => {
  return {
    selectedPlant: state.plantsState.selectedPlant
  };
};

export default withRouter(connect(mapStateToProps)(ShopItem));
