import React, { PropTypes } from 'react'

class Top extends React.Component {
  render () {
    let styles ={
      root:{
        width:'50%',
        margin:'0 auto',
        paddingTop:'40px'
      },
      h2:{
        width:'70%',
        margin:'0 auto',
        textAlign:'center'
      },
      span:{
        color:'red'
      },
      p:{
        width:'70%',
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
        <h2 style={styles.h2}><span style={styles.span}>薪资</span>不断攀升，<span>发展</span>潜力无线</h2>
        <p style={styles.p}>RINSING WAGES AND DEVELOPMENT POTENTIAL </p>
        <div  style={styles.div}></div>
      </div>
    )
  }
}

export default Top;
