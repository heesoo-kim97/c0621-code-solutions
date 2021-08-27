import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  selectClasses() {
    return (
      !this.state.drawerOpen
        ? {
            menuIcon: 'fas fa-bars menu-icon',
            appDrawer: 'appDrawer appDrawer-closed',
            appDrawerBackground: 'appDrawer-background appDrawer-background-hide'
          }
        : {
            menuIcon: 'hidden',
            appDrawer: 'appDrawer appDrawer-opened',
            appDrawerBackground: 'appDrawer-background appDrawer-background-show'
          }
    );
  }

  render() {
    const className = this.selectClasses();
    return (
      <div>
        <div className="main">
          <div onClick={this.handleClick} className={className.menuIcon}></div>
        </div>
        <div onClick={this.handleClick} className={className.appDrawerBackground}>
          <div className={className.appDrawer}>
            <h1 className="appDrawer-menu">Menu</h1>
            <h3 onClick={this.handleClick} className="appDrawer-option">About</h3>
            <h3 onClick={this.handleClick} className="appDrawer-option">Getting Started</h3>
            <h3 onClick={this.handleClick} className="appDrawer-option">Sign In</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
