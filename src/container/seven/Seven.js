import React, { PropTypes } from 'react'

class Seven extends React.Component {
  render () {
    let styles={
      root:{
        width:'70%',
        margin:'0 auto'
      },
      bigdiv:{
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        maxWidth:'960px',
        margin:'0 auto',
        // padding:'10px',
        justifyContent:'space-between',
      },
      everydiv:{
        width:'21%',
        marginBottom:'10px',
      }
    }
    return(
      <div style={styles.root}>
        <div style={styles.bigdiv}>
          <div style={styles.everydiv}>
            <img src="http://oboi4l44j.bkt.clouddn.com/haoxiaojun_89.jpg"/>
            <h3>郝小军</h3>
            <p>就职：乐视</p>
            <p>薪资：<span>15000</span>元/月</p>
            <p>毕业院校：河北科技师范学院</p>
          </div>
          <div style={styles.everydiv}>
            <img src="http://oboi4l44j.bkt.clouddn.com/daijinming_91.jpg"/>
            <h3>戴金明</h3>
            <p>就职：北京链家地产</p>
            <p>薪资：<span>12000</span>元/月</p>
            <p>毕业院校：河北科技师范学院</p>
          </div>
          <div style={styles.everydiv}>
            <img src="http://oboi4l44j.bkt.clouddn.com/jiangwen_96.jpg"/>
            <h3>姜文</h3>
            <p>就职：百度</p>
            <p>薪资：<span>13000</span>元/月</p>
            <p>毕业院校：东北石油</p>
          </div>
          <div style={styles.everydiv}>
            <img src="http://oboi4l44j.bkt.clouddn.com/sunlulu_93.jpg"/>
            <h3>孙露露</h3>
            <p>就职：优酷土豆</p>
            <p>薪资：<span>15000</span>元/月</p>
            <p>河北科技师范学院</p>
          </div>
          <div style={styles.everydiv}>
            <img src="http://oboi4l44j.bkt.clouddn.com/yuhao_102.jpg"/>
            <h3>余浩</h3>
            <p>就职：网易</p>
            <p>薪资：<span>30万</span>元/年</p>
            <p>毕业院校：武汉大学</p>
          </div>
          <div style={styles.everydiv}>
            <img src="http://oboi4l44j.bkt.clouddn.com/zhangjunya_103.jpg"/>
            <h3>张君雅</h3>
            <p>就职：HTC</p>
            <p>薪资：<span>15000</span>元/月</p>
            <p>毕业院校：南京艺术师范学校</p>
          </div>
          <div style={styles.everydiv}>
            <img src="http://oboi4l44j.bkt.clouddn.com/wangshaojun_104.jpg"/>
            <h3>王少静</h3>
            <p>就职：小米科技</p>
            <p>薪资：<span>15000</span>元/月</p>
            <p>毕业院校：河北理工学校</p>
          </div>
          <div style={styles.everydiv}>
            <img src="http://oboi4l44j.bkt.clouddn.com/kongyu_105.jpg"/>
            <h3>孔越</h3>
            <p>就职：搜狐</p>
            <p>薪资：<span>12000</span>元/月</p>
            <p>毕业院校：沈阳大学</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Seven;
