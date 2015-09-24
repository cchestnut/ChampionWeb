require('../../css/components/notyet.scss');
import React from 'react';

let NotYetPage = React.createClass({
  render() {
    let classString = "notYet " + this.props.pageName;
    return (
      <div className={classString}>
        <p>{this.props.pageName} Page is coming...give it time...</p>
      </div>
    );
  }
});

export default NotYetPage;
