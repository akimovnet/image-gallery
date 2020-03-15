import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <div className="comment">
        <p><b>{this.props.author}:</b></p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Comment;
