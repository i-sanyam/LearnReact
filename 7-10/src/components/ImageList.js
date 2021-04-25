import React from 'react';

const imageList = (props) => {
  const images = props.images.map(({ id, urls, description }) => {
    return <img alt={description} src={urls.regular} key={id} />
  });
  return (
    <div>{images}</div>
  );
}

export default imageList;