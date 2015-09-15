import React from 'react';
import Router from 'react-router';
import ExecutionEnv from 'react/lib/ExecutionEnvironment';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import stylesheet from '../css/components/mainPage.scss';
import headerSheet from '../css/components/header.scss';
require('../css/fonts.scss');

import MainHandler from './components/Page.js';
import {TrainingHandler, ShadowHandler, VideoHandler, DevHandler}
  from './components/pageHandlers.js';

const WINDOW_CONSTANT = 154;
let App = React.createClass({
  getInitialState() {
    return (window.scrollY > WINDOW_CONSTANT) ?
      {navSize: 'slim'} : {navSize: 'regular'};
  },

  render() {
    let classString = 'nav at8units ' + this.state.navSize;
    return (
      <div className={classString}>
        <div className="NavHeader">
          <Link to="main">Main</Link>
          <Link to="shadow">Shadow Boxing</Link>
        </div>
        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  },

  componentDidMount() {
    if (ExecutionEnv.canUseDOM) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },

  componentWillUnMount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll() {
    console.log(window.scrollY);
    if(window.scrollY > 103) {
      this.setState(
        {
          navSize: 'slim'
        }
      );
    } else {
      this.setState(
        {
          navSize: 'regular'
        }
      );
    }
  }
});

let routes = (
  <Route name="app" path="/main" handler={App}>
    <Route name="shadow" path="/shadow" handler={ShadowHandler}/>
    <Route name="main" path="/" handler={MainHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
