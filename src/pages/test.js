import React, { Component } from 'react';

import '../css/test.css';

export default class Test extends Component {
  constructor(props) {
    super(props);
    console.log('Test contructor', props);
  }
  render() {
    return (
      <div>
        <h1>Test Page</h1>
        <p className="red">This is a test page</p>
        <a href="/" className="test">go to index</a>
      </div>
    );
  }
}