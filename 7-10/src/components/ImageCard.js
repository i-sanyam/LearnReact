import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.ImageRef = React.createRef();
  }
  handleSpans = () => {
    const height = this.ImageRef.current.clientHeight;
    this.setState({ spans: Math.ceil(height / 10) })
  }
  componentDidMount() {
    this.ImageRef.current.addEventListener('load', this.handleSpans);
  }
  render() {
    const { description, urls } = this.props.image;
    return <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
      <img ref={this.ImageRef} alt={description} src={urls.regular} />
    </div>
  }
}

export default ImageCard;