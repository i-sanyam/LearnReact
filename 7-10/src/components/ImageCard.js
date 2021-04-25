import React from 'react';

class ImageCard extends React.Component {
  render() {
    const { description, urls } = this.props.image;
    return <img alt={description} src={urls.regular}/>
  }
}

export default ImageCard;