import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../pages/components/Header.js';
import Index from '../pages/Index.js';
import Form from '../pages/Form.js';
import Page2 from '../pages/Page2.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Index} />
      <Route path="/Form" component={Form}></Route>
      <Route path="/Page2" component={Page2}></Route>
    </div>
  </BrowserRouter>
);
export default AppRouter;