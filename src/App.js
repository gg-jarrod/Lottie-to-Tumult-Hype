import React, { Component } from 'react';

import Header from './components/header.js';
import Footer from './components/footer.js';
import Player from './components/player.js';
import Form from './components/form.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      firstDrop: true
    };
  }

  onUpdate = (fileName) => {
    this.setState({
      fileName: fileName ,
      firstDrop: false
      });
  }

  render() {
    if (this.state.firstDrop == false) {
      let player = document.getElementById('player');
      let form = document.getElementById('form');

      form.classList.remove('form-firstdrop');
      player.classList.remove('player-firstdrop');
    }

    return (
      <div className="App">
        <Header/>
        <div className="main-container">
          <Player onUpdate={ this.onUpdate }/>
          <Form fileName={ this.state.fileName }/>
        </div>
      </div>
    );
  }
}

export default App;
