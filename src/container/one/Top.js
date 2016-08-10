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
        <h2 style={styles.h2}><span style={styles.span}>互联网+时代</span>/不懂IT技术迟早被淘汰</h2>
        <p style={styles.p}>INTERNET+AGE DON‘T UNDERSTAND IT TECHNOLOGY TO BE ELIMINATED SOONER ORLATER </p>
        <div  style={styles.div}></div>
      </div>
    )
  }
}

export default Top;
