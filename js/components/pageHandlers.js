import React from 'react';
import NotYetPage from '../components/NotYet.js';
export let ShadowHandler = React.createClass({
  displayName: 'ShadowPage',
  render(){
    return(
      <NotYetPage pageName="Shadow"/>
    );
  }
});

export let TrainingHandler = React.createClass({
  displayName: 'Training',
  render(){
    return(
      <NotYetPage pageName="Training"/>
    );
  }
});

export let DominationHandler = React.createClass({
  displayName: 'Domination',
  render() {
    return(
      <NotYetPage pageName="Domination"/>
    );
  }
});

export let DevHandler = React.createClass({
  displayName: 'Development',
  render(){
    return(
      <NotYetPage pageName="Development"/>
    );
  }
});

export let VideoHandler = React.createClass({
  displayName: 'Video',
  render(){
    return(
      <NotYetPage pageName="Video"/>
    );
  }
});


/*export let TrainingHandler = ShadowHandler,
  VideoHandler = ShadowHandler,
  DevHandler = ShadowHandler;*/

