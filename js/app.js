import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import stylesheet from '../css/components/mainPage.scss';
import headerSheet from '../css/components/header.scss';
require('../css/fonts.scss');

import LoginHandler from './components/Login.js';
import MainHandler from './components/Page.js';

let App = React.createClass({
  render() {
    return (
      <div className="nav at8units">
        <div className="NavHeader">
          <Link to="main">Main</Link>
          <Link to="login">Login</Link>
        </div>
        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/main" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
    <Route name="main" path="/" handler={MainHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
