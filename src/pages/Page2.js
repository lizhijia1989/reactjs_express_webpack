import React from 'react';

export default class Page2 extends React.Component {
  constructor(props) {
    super(props);
    console.log('Page2', props);
  }
  render() {
    return (
      <div>
        <h1>Page2</h1>
      </div>
    );
  }
}