import React, { Component } from 'react';

import Logo from '../images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={ Logo } alt="logo" className="logo"/>
        <h1>Bodymovin Player</h1>
      </header>
    );
  }
}

export default Header;
