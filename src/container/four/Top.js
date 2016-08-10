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
        color:'#555',
        fontWeight:'normal'
      },
    }
    return(
      <div style={styles.root}>
        <h2 style={styles.h2}> <span style={styles.span}>茫茫人海中</span> 你是哪一个</h2>

      </div>
    )
  }
}

export default Top;
