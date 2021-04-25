import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard'
class imageList extends React.Component {
  render() {
    const images = this.props.images.map(image => {
      return <ImageCard key={image.id} image={image} />;
    });
    return (
      <div className='image-list'>{images}</div>
    );
  }
}

export default imageList;