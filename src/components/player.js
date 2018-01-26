import React, { Component } from 'react';
import Lottie from 'react-lottie';

class Player extends Component {
  constructor(){
    super();

    this.state = { dataName: '',
    contName: 'animation_container',
    layoutName: '',
    layouts: [300, 450, 900],
    output: []
  };

}

dataChange = (event) => {
  const re = /^[\w-.]+$/;

  if (event.target.value === '' || re.test(event.target.value)) {
    localStorage.setItem('dataName', event.target.value);
    this.setState({ dataName: event.target.value });

  }
}

contChange = (event) => {
  const re = /^[\w-]+$/;
  if (event.target.value === '' || re.test(event.target.value)) {
    localStorage.setItem('contName', event.target.value);
    this.setState({ contName: event.target.value });
  }
}

layoutChange = (event) => {
  const re = /^[\w-]+$/;
  if (event.target.value === '' || re.test(event.target.value)) {
    this.setState({ layoutName: event.target.value });
  }
}

addLayout = (event) => {
  if (event.key === 'Enter') {
    this.setState({ layouts: [...this.state.layouts, this.state.layoutName] });
    localStorage.setItem('contName', event.target.value);
    this.setState({ layoutName: '' });
  }
}

deleteLayout = (v) => {
  for (let i = 0; i < this.state.layouts.length; i++) {
    if (this.state.layouts[i] == v) {
      this.state.layouts.splice(i, 1);
    }
  }

  this.setState({
    layouts: this.state.layouts
  });
}

buttonClick = () => {
  this.state.output = [];

  for (let i=0; i < this.state.layouts.length; i++) {
    this.state.output.push(
      `The data is ${ this.state.dataName }. The container is ${ this.state.contName }. The layout is ${ this.state.layouts[i] }. `
    );
  }

  this.setState({
    output: this.state.output
  });
}

render() {
  return (
    <div style={ {margin: '48px'} }>
      <div className="gds-flex">
        <div className="gds-card gds-flex__item player-container" >
          <div className="gds-html-preview"/>
        </div>
        <div className="gds-card gds-flex__item code-container">
          <div className="gds-form-group" data-gds-form-group="">
            <label className="gds-form-group__label">Animation Data</label>
            <input className="gds-form-group__text-input" type="text" id="input-data" placeholder="Enter Text" value={ this.state.dataName } onChange={ this.dataChange }/>
          </div>
          <div className="gds-form-group" data-gds-form-group="">
            <label className="gds-form-group__label">Container Name</label>
            <input className="gds-form-group__text-input" type="text" id="input-container" placeholder="Enter Text" value={ this.state.contName } onChange={ this.contChange }/>
          </div>
          <div className="gds-form-group" data-gds-form-group="">
            <label className="gds-form-group__label">Layout Sizes</label>
            <input className="gds-form-group__text-input" type="text" id="input-layout" placeholder="Enter Text" value={ this.state.layoutName } onChange={ this.layoutChange } onKeyPress={ this.addLayout }/>
            {this.state.layouts.map((v) => {
              return <div className="gds-tag gds-tag--with-button-sm gds-tag--primary gds-tag--sm">{v}
                <button className="gds-tag__button gds-tag__button--primary gds-tag__button--sm" onClick={ this.deleteLayout.bind(this, v) }/>
              </div>;
            }) }
          </div>
          <button type="button" className="gds-button -m-r-1 gds-button--sm gds-button--default" onClick={ this.buttonClick }>Generate Code</button>
          {this.state.output.map((v) => {
          return <div>
            <label className="gds-form-group__label">Javascrtipt Action for { this.state.layouts[v] }</label>
            <p>{v}</p>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}
}

export default Player;
