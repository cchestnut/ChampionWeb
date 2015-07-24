import React from 'react';

let MediaPiece = React.createClass({
  render() {
    return(
      <li className={this.props.children}>
        <div className='innerMedia'/>
        <div className='innerText'>
          <div className='smallText'/>
        </div>
      </li>
    )
  }
});

export default MediaPiece;
