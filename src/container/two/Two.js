import React, { PropTypes } from 'react'
import Top from './Top';
import  Echart from './echart';
import Anniu from './Anniu';
class Two extends React.Component {
  render () {
    let styles={
      div :{

        backgroundColor:'#f5f5f5'
      }
    }
    return(
      <div style={styles.div}>
        <Top />
        <Echart />
        <Anniu />
      </div>
    )
  }
}

export default Two;
