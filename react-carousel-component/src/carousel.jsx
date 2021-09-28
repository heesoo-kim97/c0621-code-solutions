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
    this.timerID = setInterval(() => this.moveRight(), 2000);
  }
}
