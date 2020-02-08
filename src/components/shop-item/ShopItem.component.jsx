import React, { Component } from 'react';
import CommentBox from '../comment-box/CommentBox.component.jsx';
import CommentsList from '../comments-list/CommentsList.component.jsx';
import { connect } from 'react-redux';
import { findPlant, submitComment } from '../../actions';
import { withRouter } from 'react-router-dom';
import './ShopItem.styles.scss';

class ShopItem extends Component {

  state = {
    comment: '',
    commentPosted: false
  };

  componentDidMount() {
    const { dispatch, match } = this.props;
    return dispatch(findPlant(match.params.shopId));
  };

  handleCommentChange = (e) => {
    e.preventDefault();
    this.setState({
      comment: e.target.value
    }, () => console.log(this.state.comment));
  };

  handleCommentSubmit = (e) => {
    const { dispatch, selectedPlant } = this.props;
    let { comment } = this.state;
    e.preventDefault();
    this.setState({
      commentPosted: true
    });
    return dispatch(submitComment(selectedPlant.id, comment));
  }

  render() {
    const { selectedPlant } = this.props;
    const { commentPosted } = this.state;
      return (
        <div className="shop-item">
          <div className="item-image-container">
            <img
              src={'https://via.placeholder.com/600'}
            />
          </div>
          <div className="item-content">
            <div className="type">
              {selectedPlant.type}
            </div>
            <div className="description">
              {selectedPlant.description}
            </div>
            <div className="likes">
              {selectedPlant.likes}
              <img
                className="heart"
                src={require('../../_assets/img/heart.png')}
                alt={selectedPlant.likes > 1 ? `Hearts` : `Heart`}
              />
            </div>
            <CommentBox
              isDisabled={commentPosted}
              handleCommentChange={this.handleCommentChange}
              handleCommentSubmit={this.handleCommentSubmit}
            />
            { selectedPlant.comments ?
              <CommentsList
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
