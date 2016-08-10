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
      <a href="#" style={styles.a}>更多学员作品></a>
    )
  }
}

export default Anniu;
