import React from 'react';
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class FullImage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  handleLike() {
    this.props.onLikeClick(this.props.image);
  }

  handleSubmitComment(comment) {
    this.props.onSubmitComment(this.props.image.id, comment);
  }

  render() {
    return (
      <div className="modal-wrapper">
        <div className="modal-box">
          <div className="modal-main">
            <img src={process.env.PUBLIC_URL + this.props.image.originalPath} alt="" />
          </div>
          <div className="modal-additional">
            <button
              className="close-button"
              onClick={this.props.onCloseClick}>&times;</button>
            <button
              className={'like-button ' + (this.props.image.liked? 'liked' : '')}
              onClick={this.handleLike}>Like</button>
            {(this.props.image.comments.length > 0) &&
              <CommentList comments={this.props.image.comments} />
            }
            <AddComment onSubmit={this.handleSubmitComment} />
          </div>
        </div>
      </div>
    );
  }
}

export default FullImage;
