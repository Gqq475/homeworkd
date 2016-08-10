import React, { PropTypes } from 'react'

class Bto extends React.Component {
  render () {
    let styles={
      root:{
        width:'70%',
        margin:'0 auto',
        overflow:'hidden',
        borderBottom:'2px solid #ccc'
      },
      div:{
        width:'40%',
        float:'left',
        marginLeft:'6%',
        marginBottom:'20px'
      },
      h3:{

        height:'30px',
        color:'#fff',
        backgroundColor:'red',
        textAlign:'center',
        lineHeight:'30px'
      },
      p:{

        fontSize:'14px',
        color:'#555'
      },
      img:{
        width:'100%',
        display:'block'
      },

    }
    return(
      <div style={styles.root}>
        <div style={styles.div}>
          <h3 style={styles.h3}>薪资高，让同龄人遥不可及</h3>
          <p style={styles.p}>Web前端开发源于传统的互联网，互联网普及让人才需求量居高不下，随着移互联网的高速发展，移动终端的前端开发也越来越受到重视，因此薪水自然也高，据智联招聘、51jop、拉勾猎聘网等招聘网站得到的数据，web前端工程师的平均薪资都在万元以上，是真正的高薪职业。</p>
          <img style={styles.img}src="https://github.com/Gqq475/deploy/blob/master/src/img/bl.jpg?raw=true"/>
        </div>
        <div style={styles.div}>
        <h3  style={styles.h3}>人才缺口大，现在是入行最佳时机</h3>
        <p style={styles.p}>在互联网高速发展的今天，web前端工程师是市场上紧缺的高技能人才，每天有数万家企业招聘该岗位，以北京为例，每天就有近9000条web前端工程师职位招聘，可以说web前端工程师就业前景广阔，符合未来发展趋势</p>
        <img style={styles.img}src="https://github.com/Gqq475/deploy/blob/master/src/img/br.jpg?raw=true"/>
        </div>
      </div>
    )
  }
}

export default Bto;
