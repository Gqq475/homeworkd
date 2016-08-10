import React, { PropTypes } from 'react'

class Top extends React.Component {
  render () {
    let styles = {
      root:{
        overflow:'hidden',
        height:'70px',
        margin:'0 auto',
        // backgroundColor:'darkblue'
      },
      h2:{
        float:'left',
        width:'30%',
        marginLeft:'11%'
      },
      div:{
        float:'right',
        width:'34%',
        marginTop:'25px'
      },
      input:{
        width:'250px',
        height:'20px',
        float:'left',
        border:'1px solid red',
      
      },
      a:{
        display:'block',
        float:'left',
        margin:'0',
        backgroundColor:'red',
        color:'#fff',
        textDecoration:'none'
      }
    }
    return(
      <div style={styles.root}>
      <h2 style={styles.h2}>第嘉学社</h2>
      <div style={styles.div}>
        <input placeholder='请输入手机号' style={styles.input}></input>
        <a href="#" style={styles.a}>领取助学金</a>
      </div>
      </div>
    )
  }
}

export default Top;
