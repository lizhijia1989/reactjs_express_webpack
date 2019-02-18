import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../pages/Header.js';
import Index from '../pages/Index.js';
import Page1 from '../pages/Page1.js';
import Page2 from '../pages/Page2.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Index} />
      <Route path="/Page1" component={Page1}></Route>
      <Route path="/Page2" component={Page2}></Route>
    </div>
  </BrowserRouter>
);
export default AppRouter;