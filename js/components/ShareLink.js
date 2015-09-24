require('../../css/components/ShareLink.scss');

import React from 'react';

let ShareLink = React.createClass({
  render() {
    return (
      <div className={this.props.share}>
        <a href={this.props.children}/>
      </div>
    );
  }
});

export default ShareLink;
