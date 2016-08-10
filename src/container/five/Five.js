import React, { PropTypes } from 'react'
import Fone from './Fone';
import Ftwo from './Ftwo';
import Fthree from './Fthree';
import Ffour from './Ffour';
import Ffive from './Ffive';

class Five extends React.Component {
  render () {
    let styles={
      root:{
            backgroundColor:'#f5f5f5'
      }
    }
    return(
      <div style={styles.root}>
        <Fone />
        <Ftwo />
        <Fthree />
        <Ffour />
        <Ffive />
      </div>
    )
  }
}

export default Five;
