import React, { PropTypes } from 'react'
import FfourTop from './FfourTop';
import FourAnniu from'./FourAnniu';
class Ffour extends React.Component {
  render () {
    let styles={
      root:{
        width:'70%',
        margin:'0 auto',
        borderBottom:'2px solid #ccc'
      },
      div:{
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        maxWidth:'960px',
        margin:'0 auto',
        padding:'10px',
        justifyContent:'space-between',
      },
      img:{
        display:'block',
        width:'33%',
        marginBottom:'10px',
      }
    }
    return(
      <div style={styles.root}>
        <FfourTop />
        <div style={styles.div}>
          <img style={styles.img}src="http://oboi4l44j.bkt.clouddn.com/3dzp_64.jpg"/>
          <img style={styles.img}src="http://oboi4l44j.bkt.clouddn.com/dszp_61.jpg"/>
          <img style={styles.img}src="http://oboi4l44j.bkt.clouddn.com/lhzp_67.jpg"/>
          <img style={styles.img}src="http://oboi4l44j.bkt.clouddn.com/blzp_76.jpg"/>
          <img style={styles.img}src="http://oboi4l44j.bkt.clouddn.com/txzp_78.jpg"/>
          <img style={styles.img}src="http://oboi4l44j.bkt.clouddn.com/grzp_81.jpg"/>
        </div>
        <FourAnniu />
      </div>
    )

  }
}

export default Ffour;
