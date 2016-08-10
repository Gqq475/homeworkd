import React, { PropTypes } from 'react';
import Top from './Top';
import Navs from './Navs';
import Banner from './Banner';
class Header extends React.Component {
  render () {
    return(
      <div>
        <Top />
        <Navs />
        <Banner />
      </div>
   )
  }
}

export default Header;
