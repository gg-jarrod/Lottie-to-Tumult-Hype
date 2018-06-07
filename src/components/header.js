import React, { Component } from 'react';

import Logo from '../images/logo.svg';
import LottieJS from '../files/lottie.min.zip';
import DemoProject from '../files/demo_project.zip';

class Header extends Component {å
  render() {
    return (
      <header>
        <img src={ Logo } alt="logo" className="logo"/>
        <div className="-text-right">
          <h1 className="gds-text--header-md">Lottie To Tumult Hype</h1>
          <a className="gds-text--body-md gds-text--link" href={ LottieJS } download="lottie.min.zip" title="v5.1.16">Lottie</a>
          <a className="gds-text--body-md gds-text--link" href={ DemoProject } download="demo_project.zip">Demo Project</a>
          <a className="gds-text--body-md gds-text--link" href="https://github.com/airbnb/lottie-web" target="_blank">GitHub Documentation</a>
        </div>
      </header>
    );
  }
}

export default Header;
