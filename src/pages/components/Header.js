import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <ul style={{ marginBottom: '10px', padding: '10px', borderBottom: '1px solid #ddd' }}>
        <li><Link to='/'>Index</Link></li>
        <li><Link to='/Form'>Form</Link></li>
        <li><Link to='/Page2'>Page2</Link></li>
      </ul>
    );
  }
}