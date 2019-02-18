import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>Index</Link>
        <Link to='/Page1'>Page1</Link>
        <Link to='/Page2'>Page2</Link>
      </div>
    );
  }
}