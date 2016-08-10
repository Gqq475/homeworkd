import React, { PropTypes } from 'react'
import OneAnniu from './OneAnniu'
class Fone extends React.Component {
  render () {
    let styles ={
      root:{
        width:'70%',
        margin:'0 auto',

          borderBottom:'1px solid #ccc',
      },

      p:{
        color:'#555',
        fontSize:'20px'
      },
      span:{
        fontWeight:'bold'
      },
      img:{
          marginBottom:'20px',
          marginTop:'20px'
      }
    }
    return(
      <div style={styles.root}>
        <a href="#"><img style={styles.img}src="https://github.com/Gqq475/deploy/blob/master/src/img/fiveone.jpg?raw=true"/></a>
        <div style={styles.div}>
          <p ><span style={styles.span}>pc端模块:</span>div+css网站重构，浏览器兼容，网站交互特效，数据交互技术，面向对象编程思想及模块化开发原理</p>
          <p ><span style={styles.span}>移动端模块:</span>css3动画，响应式设计，H5开发，微信场景开发技术，WEB APP开发</p>
          <p ><span style={styles.span}>全栈模块:</span>最新mean技术栈，es6,nodejs,reactjs组件化开发等技术</p>
          <span style={styles.span}>全国首创ui+web前端课程，熟悉完整工作流程，减少沟通阻力，实现与ui设计师工作完美对接</span>
  <OneAnniu />
      </div>

      </div>
    )
  }
}

export default Fone;
