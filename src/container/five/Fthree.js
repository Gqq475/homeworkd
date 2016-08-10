import React, { PropTypes } from 'react'
import ThreeAnniu from './ThreeAnniu'
class Fthree extends React.Component {
  render () {
    let styles={
      root:{
        width:'70%',
        marginTop:'20px',
        marginBottom:'20px',
        margin:'0 auto',

      },
      a:{
        display:'block',
        marginTop:'20px'
      },
      span:{

        fontWeight:'bold',
      },
      p:{
        marginTop:'20px',
      },
      eightPic:{
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        maxWidth:'960px',
        margin:'0 auto',
        padding:'10px',
        justifyContent:'space-between',
      },
      eightPicimg:{
        display:'block',
        width:'24%',
        marginBottom:'10px',
      }
    }
    return(
      <div style={styles.root}>
        <a  style={styles.a}href="#"><img src="https://github.com/Gqq475/deploy/blob/master/src/img/fiveone.jpg?raw=true"/></a>
        <p style={styles.p}><span style={styles.span} >企业项目实战教学，学习=工作</span>，课程内容根据企业招聘需求更新，毕业即可顺利进入工作状态</p>
        <div style={styles.eightPic} >
          <img  style={styles.eightPicimg}src="https://github.com/s594475/digicity/blob/master/src/images/xm_41.jpg?raw=true"/>
          <img  style={styles.eightPicimg}src="https://github.com/s594475/digicity/blob/master/src/images/syxm_43.jpg?raw=true"/>
          <img  style={styles.eightPicimg}src="https://github.com/s594475/digicity/blob/master/src/images/htmlxm_45.png?raw=true"/>
          <img  style={styles.eightPicimg}src="https://github.com/s594475/digicity/blob/master/src/images/dsxm_47.jpg?raw=true"/>
          <img  style={styles.eightPicimg}src="https://github.com/s594475/digicity/blob/master/src/images/appxm_52.jpg?raw=true"/>
          <img  style={styles.eightPicimg}src="https://github.com/s594475/digicity/blob/master/src/images/ipadxm_53.jpg?raw=true"/>
          <img style={styles.eightPicimg} src="https://github.com/s594475/digicity/blob/master/src/images/webxm_54.jpg?raw=true"/>
          <img  style={styles.eightPicimg}src="https://github.com/s594475/digicity/blob/master/src/images/ylxm_55.jpg?raw=true"/>
        </div>
        <ThreeAnniu/>
      </div>
    )
  }
}

export default Fthree;
