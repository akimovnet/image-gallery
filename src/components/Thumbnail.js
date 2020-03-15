import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(this.props.image);
  }

  render() {
    return (
      <div className="thumbnail">
        <a href={this.props.image.originalPath} onClick={this.handleClick}>
          <img src={this.props.image.thumbnailPath} alt="" />
        </a>
      </div>
    );
  }
}

export default Thumbnail;
