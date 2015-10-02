import React from 'react';
import Router from 'react-router';
import ExecutionEnv from 'react/lib/ExecutionEnvironment';
import ResponsiveMixin from 'react-responsive-mixin';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import stylesheet from '../css/components/mainPage.scss';
import headerSheet from '../css/components/header.scss';
require('../css/fonts.scss');

import MainHandler from './components/Page.js';
import ShareLink from './components/ShareLink.js';
import {TrainingHandler, ShadowHandler, VideoHandler, DevHandler, DominationHandler}
  from './components/pageHandlers.js';

const WINDOW_CONSTANT = 154;
let App = React.createClass({
  mixins: [ResponsiveMixin],
  getInitialState() {
    let initState = { navSize: '', screenUnit: 'at4units' };
    initState.navSize = (window.scrollY > WINDOW_CONSTANT) ?
      'slim': 'regular';

    return initState;
  },
  /*
   *Nav tabs still left to render
    Training
    Domination
    Development
    Videos
    Shadow Binding
  */


  render() {
    let desktopString = 'nav ' + this.state.navSize + ' ' + this.state.screenUnit;
    return (
      <div className={desktopString}>
          <div className="NavHeader">
            <a className="sharelink" href="https://www.facebook.com/InnerChampion"/>
            <Link to="main">Main</Link>
            <Link to="train">Train</Link>
            <Link to="dominate">Dominate</Link>
            <Link to="dev">Development</Link>
            <Link to="videos">Videos</Link>
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
    this.media({minWidth: 860}, () => {
      this.setState({screenUnit: 'at8units'});
      this.forceUpdate();
    }.bind(this));

    this.media({maxWidth: 859}, () => {
      this.setState({screenUnit: 'at4units'});
      this.forceUpdate();
    }.bind(this));
  },

  componentWillUnMount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll() {
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

    <Route name="videos" path="/videos" handler={VideoHandler}/>
    <Route name="dev" path="/development" handler={DevHandler}/>
    <Route name="dominate" path="/dominate" handler={DominationHandler}/>
    <Route name="train" path="/train" handler={TrainingHandler}/>
    <Route name="shadow" path="/shadow" handler={ShadowHandler}/>
    <Route name="main" path="/" handler={MainHandler}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
