import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from '../pages/index.js';
import Test from '../pages/test.js';

export default class AppRouter extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route path="/test" component={Test}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}