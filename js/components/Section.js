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
      <div className={classString}>{this.props.children}
        <MediaList data={inner} listType={this.props.type}/>
      </div>
    );
  }
});



export default Section;
