import React from 'react';

let MediaPiece = React.createClass({
  render() {
    return(
      <div className={this.props.children}>
        <div className='innerMedia'/>
        <div className='textBlock'>
          <div className='innerText'/>
          <div className='smallText'/>
        </div>
      </div>
    )
  }
});

export default MediaPiece;
