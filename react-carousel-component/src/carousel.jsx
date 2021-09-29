import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 1 };
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.imageId = this.imageId.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.moveRight(), 2500);
  }

  moveLeft() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.moveRight(), 2500);
    if (this.state.view <= 1) {
      this.setState({ view: this.props.images.length });
    } else {
      this.setState(prevState => ({
        view: prevState.view - 1
      }));
    }
  }

  moveRight() {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.moveRight(), 2500);
    if (this.state.view >= this.props.images.length) {
      this.setState({ view: 1 });
    } else {
      this.setState(prevState => ({
        view: prevState.view + 1
      }));
    }
  }

  imageId(e) {
    clearInterval(this.timerID);
    this.timerID = setInterval(() => this.moveRight(), 2500);
    const id = parseInt(e.target.id);
    this.setState({ view: id });
  }

  render() {
    const images = this.props.images;
    return (
      <div className="carousel" >
        <i className="fas fa-angle-left fa-4x" onClick={this.moveLeft}></i>
        {images.map(image => {
          return (this.state.view === image.id && (
            <img key={image.id} className='image' src={image.url} alt={image.id} />
          ));
        })}
        <div className="progress-dot-container">
          {images.map(image => {
            return (this.state.view === image.id
              ? (<i id={image.id} key={image.id} className="fas fa-circle" onClick={this.imageId}></i>)
              : (<i id={image.id} key={image.id} className="far fa-circle" onClick={this.imageId}></i>)
            );
          })}
        </div>
        <i className="fas fa-angle-right fa-4x" onClick={this.moveRight}></i>
      </div >
    );
  }
}
