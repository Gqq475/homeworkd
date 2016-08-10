import React, { PropTypes } from 'react'

class FfourTop extends React.Component {
  render () {
    let styles ={
      root:{
        width:'50%',
        margin:'0 auto',
        paddingTop:'40px'
      },
      h2:{
        width:'75%',
        margin:'0 auto',
        textAlign:'center'
      },
      span:{
        color:'red'
      },
      p:{
        width:'75%',
        margin:'0 auto',
        textAlign:'center'
      },
      div:{
        width:'10%',
        height:'10px',
        borderBottom:'3px solid red',
        margin:'0 auto'
      }
    }
    return(
      <div style={styles.root}>
        <h2 style={styles.h2}><span style={styles.span}>零基础</span>入学，<span style={styles.span}>4个月</span>拥有两年项目经验</h2>
        <p style={styles.p}>ZERO BASE ENTRANCE,4MONTHS,WITH TWO YEARS EXPRIENCE IN PROJECT</p>
        <div style={styles.div}></div>
      </div>
    )
  }
}

export default  FfourTop;
