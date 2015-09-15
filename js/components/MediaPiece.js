import React from 'react';
import {innerTextMapping} from '../textConfigs.js';
import {smallTextMapping} from '../textConfigs.js';

let MediaPiece = React.createClass({
  render() {
    let innerText = innerTextMapping[this.props.children];
    let smallText = smallTextMapping[this.props.children];
    console.log(this.props ? this.props.children : 'nope');
    return(
      <div className={this.props.children}>
        <div className='innerMedia'/>
        <div className='textBlock'>
          <p className='innerText'>{innerText}</p>
          <p className='smallText'/>
        </div>
      </div>
    )
  }
});

export default MediaPiece;
