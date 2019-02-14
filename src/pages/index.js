import React, { Component } from 'react';

import '../css/index.css';

export default class Index extends Component {
  constructor(props) {
    super(props);
    console.log('Index contructor', props);
  }
  handleClick = () => {
    debugger;
  }
  render() {
    return (
      <div>
        <h1 className="logo">Ctrip</h1>
        <p className="blue" onClick={() => this.handleClick()}>content</p>
        <a href="/test">go to test page</a>
      </div>
    );
  }
}