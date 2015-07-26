import React from 'react';
import MediaPiece from './MediaPiece.js';

let MediaList = React.createClass({
  render() {
    let classString = 'mediaList ' + this.props.listType + '-list';
    return(
      <div className={classString}>
        {this.props.data.map(function(result) {
          return <MediaPiece>{result}</MediaPiece>;
        })}
      </div>
    );
  }
});

export default MediaList;
