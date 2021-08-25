import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.isOn) {
      this.setState({ isOn: false });
    } else {
      this.setState({ isOn: true });
    }
  }

  render() {
    let state;
    if (this.state.isOn) {
      state = 'smart';
    } else {
      state = 'dumb';
    }
    const toggle = `toggle-switch-container ${state}`;
    const switchIt = `switch ${state}`;
    return (
    <div className="container">
        <div className={toggle} onClick={this.handleClick}>
        <button className={switchIt} />
      </div>
      <p>
        {state.toUpperCase()}
      </p>
    </div>
    );
  }
}
