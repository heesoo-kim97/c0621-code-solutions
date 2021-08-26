import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      timer: null
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.tick = this.tick.bind(this);
  }
}
