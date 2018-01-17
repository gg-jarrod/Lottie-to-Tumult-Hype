import React, { Component } from 'react';
import Lottie from 'react-lottie';

import waveData from '../animations/wave.json';

class Footer extends Component {
  render() {
    const params = {
      loop: true,
      autoplay: true,
      animationData: waveData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    return (
      <footer>
        <div className="loop-animation">
          <Lottie options={ params }/>
        </div>
      </footer>
    );
  }
}




export default Footer;
