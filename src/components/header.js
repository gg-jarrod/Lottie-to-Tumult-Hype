import React, { Component } from 'react';

import Logo from '../images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={ Logo } alt="logo" className="logo"/>
        <div className="-text-right">
          <h1 className="gds-text--header-md">Lottie To Tumult Hype</h1>
          <a className="gds-text--body-md gds-text--link" href="https://github.com/airbnb/lottie-web/blob/27ecdf179cc5b577e6e4ae5b47135349029c8067/build/player/lottie.min.js" download>Lottie v5.1.3</a>
        </div>
      </header>
    );
  }
}

export default Header;
