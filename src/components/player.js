import React, { Component } from 'react';
import Lottie from 'react-lottie';

class Player extends Component {
  render() {
    return (
      <div style={ {margin: '48px'} }>
        <div className="gds-flex">
          <div className="gds-card gds-flex__item player-container" >
            <div className="gds-html-preview"/>
          </div>
          <div className="gds-card gds-flex__item code-container">
            <div className="gds-form-group" data-gds-form-group="">
              <label className="gds-form-group__label" htmlFor="input-0">Animation Data</label>
              <input className="gds-form-group__text-input" type="text" id="input-0" placeholder="Enter Text" data-gds-input=""/>
            </div>
            <div className="gds-form-group" data-gds-form-group="">
              <label className="gds-form-group__label" htmlFor="input-0">Container Name</label>
              <input className="gds-form-group__text-input" type="text" id="input-0" placeholder="Enter Text" data-gds-input=""/>
            </div>
            <div className="gds-form-group" data-gds-form-group="">
              <label className="gds-form-group__label" htmlFor="input-0">Layout Sizes</label>
              <input className="gds-form-group__text-input" type="text" id="input-0" placeholder="Enter Text" data-gds-input=""/>
            </div>
            <div className="gds-tag gds-tag--primary">250</div>
            <button type="button" className="gds-button -m-r-1 gds-button--sm gds-button--default" data-feedback="Default clicked">Generate Code</button>
          </div>
        </div>
      </div>
    );
  }
}



export default Player;
