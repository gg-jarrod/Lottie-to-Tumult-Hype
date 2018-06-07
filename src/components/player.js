import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import Lottie from 'react-lottie';

class Player extends Component {
  constructor(){
    super();
    this.state = { firstDrop: true,
                   animData: null,
                   dropText: 'Click or Drop JSON Animation Data'
    };
  }

  onDropAccepted = (files) => {
    let obj;
    let objString;

    let reader = new FileReader();
    reader.onload = function(event) {
     obj = JSON.parse(event.target.result);
     objString = JSON.stringify(obj);

     //JSON validation
     if (objString.substr(0,5) === '{"v":') {
       this.props.onUpdate(files[0].name);
       this.setState({
         firstDrop: false,
         animData: obj
       });
       let elem = document.getElementById('dropzone');
       elem.style.opacity = 0;
       this.resetDropText();
     } else {
       this.onDropRejected();
       return null;
     }

    }.bind(this);
    reader.readAsText(files[0]);
  }

  onDropRejected = () => {
    let elem = document.getElementById('dropzone');
    setTimeout( () => {
      elem.classList.add('rejectDrop-onDrop');
    }, 20);
    
    this.setState({
      dropText: 'Error - Please Upload Lottie JSON Animation Data'
    });

    if (this.state.firstDrop === false) {
      setTimeout( () => {
        elem.style.opacity = 0;
        setTimeout( () => {
          this.setState({
            dropText: 'Click or Drop JSON Animation Data'
          });
        }, 550);
      }, 2000);
    }
  }

  resetDropText = () => {
    setTimeout( () => {
      this.setState({
        dropText: 'Click or Drop JSON Animation Data'
      });
    }, 550);
  }

  onDragEnter = () => {
    let elem = document.getElementById('dropzone');
    elem.style.opacity = 1;
  }

  onDragLeave = () => {
    if (this.state.firstDrop === false) {
      let elem = document.getElementById('dropzone');
      elem.style.opacity = 0;
    }
  }

  render() {
    let params = {
      loop: true,
      autoplay: true,
      animationData: this.state.animData,
      rendererSettings: {
      preserveAspectRatio: 'xMidYMid  meet'
      }
    };

    return (
        <div id="player" className="gds-card gds-flex__item player-container player-firstdrop">
          <div className="gds-card player">
            <div className="player-background"/>
            <div className="lottie-player">
              <Lottie options={ params }/>
            </div>
            <Dropzone id="dropzone"
                      className="gds-landing-pad"
                      accept="application/json"
                      activeClassName="activeDrop"
                      rejectClassName="rejectDrop"
                      multiple="false"
                      onDropAccepted = { this.onDropAccepted }
                      onDropRejected = { this.onDropRejected }
                      onDragEnter = { this.onDragEnter }
                      onDragLeave = { this.onDragLeave }
            >
            { this.state.dropText }
            </Dropzone>
          </div>
        </div>
    );
  }
}

Player.propTypes = {
  onUpdate: PropTypes.func
};

export default Player;
