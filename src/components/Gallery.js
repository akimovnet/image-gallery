import React from 'react';
import Thumbnail from "./Thumbnail";
import FullImage from "./FullImage";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: props.imageList,
      currentImageId: null
    };
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  handleThumbnailClick(image) {
    this.setState({
      currentImageId: image.id
    });
  }

  handleCloseClick() {
    this.setState({
      currentImageId: null
    });
  }

  handleLikeClick(currentImage) {
    const editedImage = {
      ...currentImage,
      liked: !currentImage.liked
    };
    const editedImageList = this.state.imageList.map(image =>
      image.id === editedImage.id? editedImage : image
    );
    this.setState({
      imageList: editedImageList
    });
  }

  handleSubmitComment(imageId, comment) {
    const editedImageList = this.state.imageList.map(image => {
      if (image.id === imageId) {
        return {
          ...image,
          comments: [...image.comments, comment]
        };
      }
      return image;
    });
    this.setState({
      imageList: editedImageList
    });
  }

  render() {
    return (
      <div className="gallery">
        {this.state.currentImageId? (
          <FullImage
            image={this.state.imageList.find(image => image.id === this.state.currentImageId)}
            onCloseClick={this.handleCloseClick}
            onLikeClick={this.handleLikeClick}
            onSubmitComment={this.handleSubmitComment} />
        ) : null}
        <div className="image-list">
          {this.state.imageList.map(image =>
            <Thumbnail
              key={image.id}
              image={image}
              onClick={this.handleThumbnailClick} />
          )}
        </div>
      </div>
    );
  }
}

export default Gallery;
