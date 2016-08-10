import React, { PropTypes } from 'react'

class Anniu extends React.Component {
  render () {
    let styles={
      a:{
        width:'250px',
        height:'40px',
        display:'block',
        color:'#fff',
        backgroundColor:'red',
        textAlign:'center',
        lineHeight:'40px',
        textDecoration:'none',
        fontSize:'18px',
        borderRadius:'5px',
        margin:'0 auto',
        marginTop:'30px',
        marginBottom:'30px'
      }
    }
    return(
      <a href="#" style={styles.a}>点击申请免费在线试听课程></a>
    )
  }
}

export default Anniu;
