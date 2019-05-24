import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../pages/components/Header.js';
import Index from '../pages/index.js';
import Form from '../pages/form.js';
import Login from '../pages/login.js';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Index} />
      <Route path="/Form" component={Form}></Route>
      <Route path="/Login" component={Login}></Route>
    </div>
  </BrowserRouter>
);
export default AppRouter;