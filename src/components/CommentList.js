import React from 'react';
import Comment from "./Comment";

class CommentList extends React.Component {
  render() {
    return (
      <div className="comment-list">
        <h3>Comments:</h3>
        {this.props.comments.map((comment, index) =>
          <Comment key={index} {...comment} />
        )}
      </div>
    );
  }
}

export default CommentList;
