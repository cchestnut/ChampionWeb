require('../../css/components/mainPage.scss');
require('../../css/grid.scss');

import React from 'react';
import Section from './Section.js';
let Page = React.createClass({
  displayName: 'MainPage',
  render() {
    return(
      <div className="mainPage">
      <Section type='topmost'>Welcome to The Champion Project</Section>
      <Section type='battlefield'>A Virtual Battlefield</Section>
      <Section type='brawl'>Brawl</Section>
      <Section type='toAvoid' subtitle='But how does The Champion Project prevent'/>
      <Section type='strategy'>Strategic Combat</Section>
      <Section type='weapon_grid' subtitle='Discover your preferred style of play and customize your weapon grid accordingly'/>
      <Section type='weapon_configs'/>
      </div>
    );
  }
});

export default Page;
