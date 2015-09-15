import React from 'react';

let MediaPiece = React.createClass({
  render() {
    return(
      <div className={this.props.children}>
        <div className='innerMedia'/>
        <div className='textBlock'>
          <p className='innerText'/>
          <p className='smallText'/>
        </div>
      </div>
    )
  }
});

export default MediaPiece;
