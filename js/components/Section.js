require('../../css/components/topmostSection.scss');
require('../../css/components/battlefield.scss');
require('../../css/components/brawlSection.scss');
require('../../css/components/avoid.scss');
require('../../css/components/strategySection.scss');
require('../../css/components/weaponGrid.scss');

import React from 'react';
import MediaList from './MediaList.js';

function sectionListConfig(type){
  var elemArray = [];
  if(type === 'brawl'){
    elemArray = ['jedi gif','friends text', 'split_jedi gif'];
  } else if (type === 'toAvoid'){
    elemArray = ['classyCombat', 'fromBecoming text','stupid'];
  } else if (type === 'strategy'){
    elemArray = ['offensive text', 'slice', 'smash', 'stab', 'defensive text',
      'block', 'parry'];
  } else if (type === 'weapon_grid'){
    elemArray = ['grid_example'];
  } else if (type === 'weapon_configs'){
    elemArray = ['gladiator', 'onslaught', 'shield'];
  } else if (type === 'topmost'){
    elemArray = ['welcome text'];
  } else if (type === 'battlefield'){
    elemArray = ['virtField'];
  } else{
    elemArray = [''];
  }
  return elemArray;
};

let Section = React.createClass({
  render() {
    let inner = sectionListConfig(this.props.type);
    let classString = 'sectionTitle ' + this.props.type;
    return(
      <div className={classString}>
        <h2>{this.props.children}</h2>
        <h3>{this.props.subtitle}</h3>
        <MediaList data={inner} listType={this.props.type}/>
      </div>
    );
  }
});



export default Section;
