import React, { Component } from 'react';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Player from './components/player.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Player/>
        <Footer/>
      </div>
    );
  }
}

export default App;
