import React, { PropTypes } from 'react'

class Top extends React.Component {
  render () {
    let styles ={
      root:{

        padding:' 40px 0'
      },
      h2:{
        width:'50%',
        marginLeft:'25%',
        textAlign:'center',
        color:'red'
      },
      span:{

        fontWeight:'normal'
      },
    }
    return(
      <div style={styles.root}>
        <h2 style={styles.h2}>改变现状 <span style={styles.span}> 只需四个月</span></h2>

      </div>
    )
  }
}

export default Top;
