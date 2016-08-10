import React, { PropTypes } from 'react'
import FiveAnniu from './FiveAnniu'
class Ffive extends React.Component {
  render () {
    let styles={
      div:{
        width:'70%',
        margin:'0 auto'
      },
      p:{
        fontSize:'18px',
        padding:'30px 0'
      },
      span:{
        fontWeight:'bold'
      }
    }
    return(
      <div style={styles.div}>
        <p style={styles.p}><span style={styles.span}>就业保障：</span>就业顾问1对1就业指导，就业推荐，提供企业专属岗位业界最权威职业素养软实力训练，全面提高职业素养、面试技巧、沟通能力等。</p>
        <FiveAnniu />
      </div>
    )
  }
}

export default Ffive;
