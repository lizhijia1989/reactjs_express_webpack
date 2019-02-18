import React, { Component } from 'react';

import '../css/page1.css';

export default class Page1 extends Component {
  constructor(props) {
    super(props);
    console.log('Page1', props);
  }
  render() {
    return (
      <div>
        <h1 className='page1'>Page1</h1>
      </div>
    );
  }
}