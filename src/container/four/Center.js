import React, { PropTypes } from 'react'

class Center extends React.Component {
  render () {
    let styles={
      root:{
        overflow:'hidden',
        width:'70%',
        margin:'0 auto'
      },
      div:{
        width:'26%',
        float:'left',
        marginLeft:'6%',

      },
      h3a:{

        height:'40px',
        backgroundColor:'green',
        lineHeight:'40px',
        textAlign:'center',
        marginBottom:'0',
        borderBottom:'1px wavy #ccc'
      },
      h3b:{

        height:'40px',
        backgroundColor:'orange',
        lineHeight:'40px',
        textAlign:'center',
          marginBottom:'0'
      },
      h3c:{

        height:'40px',
        backgroundColor:'purple',
        lineHeight:'40px',
        textAlign:'center',
          marginBottom:'0'
      },
      img:{
        width:'100%',
        display:'block'
      },
      p:{

        fontSize:'14px',
        color:'#555'
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.div}>
          <h3 style={styles.h3a}>在校大学生</h3>
          <img style={styles.img}src="https://github.com/Gqq475/deploy/blob/master/src/img/fourone.jpg?raw=true"/>
          <p style={styles.p}>你还在为大学里学的课程和企业要求不匹配而烦恼吗？你还在担心大学毕业后找不到理想工作而忧愁吗？你还在为花了父母几万块钱脑袋里面空空而痛苦吗？你还在不能给父母最后的回报而伤心吗？</p>
        </div>
        <div style={styles.div}>
          <h3 style={styles.h3b}>在职</h3>
          <img style={styles.img}src="https://github.com/Gqq475/deploy/blob/master/src/img/fourtwo.jpg?raw=true"/>
          <p style={styles.p}>你还在企业边缘岗，每天看主管脸色吗？你还在因为自己没有专业技能，无法提升而烦恼吗？你还在单位浑浑噩噩的混日子吗？你还在为迟迟不加薪而着急吗？</p>
        </div>
        <div style={styles.div}>
          <h3 style={styles.h3c}>没有工作</h3>
          <img style={styles.img}src="https://github.com/Gqq475/deploy/blob/master/src/img/fourthre.jpg?raw=true"/>
          <p style={styles.p}>你还在为毕业了没有找到满意的工作而痛苦吗？你还在为没有一技之长而着急吗？你还在为不能自食其力而苦恼吗？你还在创业找不到方向而迷茫吗？</p>
        </div>
      </div>
    )
  }
}

export default Center;
