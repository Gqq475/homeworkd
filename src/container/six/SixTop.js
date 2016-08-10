import React, { PropTypes } from 'react'

class SixTop extends React.Component {
  render () {
    let styles ={
      root:{
        width:'50%',
        margin:'0 auto',
        paddingTop:'40px'
      },
      h2:{
        width:'85%',
        margin:'0 auto',
        textAlign:'center',
        fontWeight:'bold'
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
        <h2 style={styles.h2}>百余家合作企业，近千个就业岗位虚位以待<span style={styles.span}>期待你的加入</span></h2>
        <p style={styles.p}>LOOKING FORWARD TO YOUR JOINING</p>
        <div style={styles.div}></div>
      </div>
    )
  }
}

export default  SixTop;
