import React from 'react';
import { Link } from 'react-router-dom';

import '../css/index.css';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    console.log('Index', props);
  }
  render() {
    return (
      <div style={{ position: 'relative' }}>
        <h1>首页</h1>
        <p>这是p标签</p>
        <a href='/Page1'>Page1</a>
        <br />
        <Link to={{ pathname: '/Page1', query: { a: 1, b: 2 }, state: { a: 1, b: 2 } }}>Link to Page1 with params</Link>
        <Link to={{ pathname: '/Page1', query: { a: 1, b: 2 }, state: { a: 1, b: 2 } }}>Link to Page1 with params</Link>
      </div>
    );
  }
}