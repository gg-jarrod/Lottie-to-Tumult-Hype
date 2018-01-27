import React, { Component } from 'react';
import Lottie from 'react-lottie';
import Dropzone from 'react-dropzone';

class Player extends Component {
  constructor(){
    super();

    this.state = { dataName: '',
    contName: 'animation_container',
    layoutName: '',
    layouts: [300, 450, 900],
    layoutsHeader: [],
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

  console.log(this.state.layoutsHeader);
  console.log(this.state.output);
}

buttonClick = () => {
  let x = [];

  this.setState({
    output: x,
    layoutsHeader: this.state.layouts
  });

  for (let i=0; i < this.state.layouts.length; i++) {
    this.state.output.push(
      `The data is ${ this.state.dataName }. The container is ${ this.state.contName }. The layout is ${ this.state.layouts[i] }. `
    );
  }

  this.setState({
    output: this.state.output
  });

  console.log(this.state.layoutsHeader);
  console.log(this.state.output);
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
            {this.state.layouts.map((v, index) => {
              return <div className="gds-tag gds-tag--with-button-sm gds-tag--primary gds-tag--sm" key={ index }>{v}
                <button className="gds-tag__button gds-tag__button--primary gds-tag__button--sm" onClick={ this.deleteLayout.bind(this, v) }/>
              </div>;
            }) }
          </div>
          <button type="button" className="gds-button -m-r-1 gds-button--sm gds-button--default" onClick={ this.buttonClick }>Generate Code</button>
          {this.state.output.map((v, index) => {
          return <div key={ index }>
            <label className="gds-form-group__label">Javascrtipt Action for { this.state.layoutsHeader[index] }</label>
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
