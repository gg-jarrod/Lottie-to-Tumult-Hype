import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props){
    super(props);

    this.state = { dataName: '',
    containerClass: 'animContainer',
    load: '',
    play: ''
    };
  }

componentWillReceiveProps(nextProps) {
  this.setState({
    dataName: nextProps.fileName,
    load: `window.${ this.state.containerClass } = [];
var loader = document.getElementsByClassName('${ this.state.containerClass }');

for(var i =0; i < loader.length; i++){
  window.${ this.state.containerClass }[i] = lottie.loadAnimation({
    container: loader[i],
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '\${resourcesFolderName}/${ nextProps.fileName }'
  });
}`,
    play: `for(var i = 0; i < ${ this.state.containerClass }.length; i++){
  window.${ this.state.containerClass }[i].play();
}`
  });
}

dataChange = (event) => {
  const re = /^[\w-. ]+$/;

  if (event.target.value === '' || re.test(event.target.value)) {
    localStorage.setItem('dataName', event.target.value);
    this.setState({
      dataName: event.target.value,
      load: `window.${ this.state.containerClass } = [];
var loader = document.getElementsByClassName('${ this.state.containerClass }');

for(var i =0; i < loader.length; i++){
  window.${ this.state.containerClass }[i] = lottie.loadAnimation({
    container: loader[i],
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '\${resourcesFolderName}/${ event.target.value }'
  });
}`,
      play: `for(var i = 0; i < ${ this.state.containerClass }.length; i++){
  window.${ this.state.containerClass }[i].play();
}`

    });
  }
}

contChange = (event) => {
  const re = /^[\w-]+$/;
  if (event.target.value === '' || re.test(event.target.value)) {
    localStorage.setItem('containerClass', event.target.value);
    this.setState({
      containerClass: event.target.value,
      load: `window.${ event.target.value } = [];
var loader = document.getElementsByClassName('${ event.target.value }');

for(var i =0; i < loader.length; i++){
  window.${ event.target.value }[i] = lottie.loadAnimation({
    container: loader[i],
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: '\${resourcesFolderName}/${ this.state.dataName }'
  });
}`,
      play: `for(var i = 0; i < ${ event.target.value }.length; i++){
  window.${ event.target.value }[i].play();
}`
    });
  }
}

render() {
  return (
    <div id="form" className="gds-card gds-flex__item form-container form-firstdrop">
      <div className="gds-form-group" data-gds-form-group="">
        <label className="gds-form-group__label">Animation Data</label>
        <input className="gds-form-group__text-input" type="text" id="input-data" placeholder="Enter Text" value={ this.state.dataName } onChange={ this.dataChange }/>
      </div>
      <div className="gds-form-group" data-gds-form-group="">
        <label className="gds-form-group__label">Container Class Name</label>
        <input className="gds-form-group__text-input" type="text" id="input-container" placeholder="Enter Text" value={ this.state.containerClass } onChange={ this.contChange }/>
      </div>
      <label className="gds-form-group__label">Javascript Instance Load Action</label>
      <div className=" gds-container gds-container--lg force-select">
        <pre>{this.state.load}</pre>
      </div>
      <label className="gds-form-group__label">Javascript Instance Play Action</label>
      <div className=" gds-container gds-container--lg force-select">
        <pre>{this.state.play}</pre>
      </div>
      <label className="gds-form-group__label -m-t-4">Instructions</label>
      <p className="-m-l-3">1. Import lottie.min.js and animation files into your Hype project.</p>
      <p className="-m-l-3">2. Add the container class name to the class name property on the element that will hold your animation.</p>
      <p className="-m-l-3">3. Add the javascript instance load actions to 'On Scene Load'.</p>
      <p className="-m-l-3">4. Add javascript instance play actions on timeline where you want the animation to start playing.</p>
      <p className="gds-text--body-xs -m-t-2">*Use the Lottie GitHub page for additional usage methods.</p>
    </div>
  );
}
}

Form.propTypes = {
  fileName: PropTypes.string
};

export default Form;
