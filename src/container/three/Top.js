import React, { PropTypes } from 'react'

class Top extends React.Component {
  render () {
    let styles ={
      root:{
        width:'70%',
        margin:'0 auto'
      },


      div:{
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
      div2:{
        width:'10%',
        height:'10px',
        borderBottom:'3px solid red',
        margin:'0 auto'
      },
      img:{
        display:'block',
        width:'100%',
        height:'auto',
        maxWidth:'700px',
        margin:'0 auto',
        marginTop:'20px',
        borderBottom:"2px solid #ccc"
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.div}>
          <h2 style={styles.h2}>就业岗位</h2>
          <p style={styles.p}>EMPLOYMENT </p>
          <div  style={styles.div2}></div>
        </div>
        <img style={styles.img} src="https://github.com/Gqq475/deploy/blob/master/src/img/three.jpg?raw=true"/>
      </div>
    )
  }
}

export default Top;
