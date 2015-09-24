require('../../css/components/ShareLink.scss');

import React from 'react';

let ShareLink = React.createClass({
  render() {
    let classString = 'sharelink ' + this.props.share;
    return (
      <div className={classString}>
        Like us on Facebook!
        <a href={this.props.children}/>
      </div>
    );
  }
});

export default ShareLink;
