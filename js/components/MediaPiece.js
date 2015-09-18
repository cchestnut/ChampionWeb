import React from 'react';
import {innerTextMapping} from '../textConfigs.js';
import {smallTextMapping} from '../textConfigs.js';

let MediaPiece = React.createClass({
  render() {
    let innerText = innerTextMapping[this.props.children];
    let smallText = [];
    let smallList;
    smallText.push(smallTextMapping[this.props.children]);
    if(smallTextMapping[this.props.children]){
      smallList = smallText[0].map(function(item){
        return (
          <li>{item}</li>
        );
      });
    }
    return(
      <div className={this.props.children}>
        <div className='innerMedia'/>
        <div className='textBlock'>
          <p className='innerText'>{innerText}</p>
          <ul className='smallText'>{smallList}</ul>
        </div>
      </div>
    )
  }
});

export default MediaPiece;
