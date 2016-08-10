import React, { PropTypes } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import TwoAnniu from './TwoAnniu';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
class  Ftwo extends React.Component {
  render () {
    let styles={
      root:{
        width:'70%',
        margin:'0 auto',
        borderBottom:'2px solid #ccc',
        marginTop:'20px'
      },
      div:{
        width:'100%',
        display:'flex',
        margin:'0 auto',
        maxWidth:'1107px',
        justifyContent:'space-around',
        paddingTop:'20px',
        marginLeft:'100px',

      },
      p:{
        fontSize:'12px'
      },
      h4:{
        fontWeight:'bold',
        textAlign:'center'
      }
    }
    return(
      <div style={styles.root}>
        <a  href="#"><img src="https://github.com/Gqq475/deploy/blob/master/src/img/fiveone.jpg?raw=true"/></a>
      <div style={styles.div} >
        <Row style={styles.row}>
          <Col xs={8} md={2}>
            <Thumbnail src="https://github.com/s594475/digicity/blob/master/src/images/linxijun_24.jpg?raw=true" alt="242x200">
              <h4 style={styles.h4}>林喜军</h4>
              <p style={styles.p}>Frank 北京第嘉传媒创始人，全国最大的CG培训基地火星时代原互动媒体系创始人之一，曾任职于OgilvyOne、电通、华洋，联众等4A广告公司，还曾任职于新东方、北京八维教育集团等大型教育培训机构，有着多年的专业广告公司从业经历，十余年的教育培训经验，尤其对大学市场有着丰富的教学与营销经验。</p>
            </Thumbnail>
          </Col>
          <Col xs={8} md={2}>
            <Thumbnail src="https://github.com/s594475/digicity/blob/master/src/images/liujian_24.jpg?raw=true" alt="242x200">
              <h4 style={styles.h4}>刘健</h4>
              <p style={styles.p}>Jason 曾就职于北京创世奇迹Wonderad全国创意总监，并在OgilvyOne、、电通、华洋，联众等4A广告公司，还曾任职于新东方、北京八维教育集团等大型教育培训机构，有着多年的专业广告公司从业经历</p>
            </Thumbnail>
          </Col>
          <Col xs={8} md={2}>
            <Thumbnail src="https://github.com/s594475/digicity/blob/master/src/images/chenshuo_26.jpg?raw=true" alt="242x200">
              <h4 style={styles.h4}>陈硕</h4>
              <p style={styles.p}>Frank 北京第嘉传媒创始人，全国最大的CG培训基地火星时代原互动媒体系创始人之一，曾任职于OgilvyOne、电通、华洋，联众等4A广告公司，还曾任职于新东方、北京八维教育集团等大型教育培训机构，有着多年的专业广告公司从业经历，十余年的教育培训经验，尤其对大学市场有着丰富的教学与营销经验。</p>
            </Thumbnail>
          </Col>
          <Col xs={8} md={2}>
            <Thumbnail src="https://github.com/s594475/digicity/blob/master/src/images/yangyong_28.jpg?raw=true" alt="242x200">
              <h4 style={styles.h4}> 杨勇</h4>
              <p style={styles.p}>Frank 北京第嘉传媒创始人，全国最大的CG培训基地火星时代原互动媒体系创始人之一，曾任职于OgilvyOne、电通、华洋，联众等4A广告公司，还曾任职于新东方、北京八维教育集团等大型教育培训机构，有着多年的专业广告公司从业经历，十余年的教育培训经验，尤其对大学市场有着丰富的教学与营销经验。</p>
            </Thumbnail>
          </Col>
          <Col xs={8} md={2}>
            <Thumbnail src="https://github.com/s594475/digicity/blob/master/src/images/peter_30.jpg?raw=true" alt="242x200">
              <h4 style={styles.h4}>Peter</h4>
              <p style={styles.p}>Frank 北京第嘉传媒创始人，全国最大的CG培训基地火星时代原互动媒体系创始人之一，曾任职于OgilvyOne、电通、华洋，联众等4A广告公司，还曾任职于新东方、北京八维教育集团等大型教育培训机构，有着多年的专业广告公司从业经历，十余年的教育培训经验，尤其对大学市场有着丰富的教学与营销经验。</p>
            </Thumbnail>
          </Col>
     </Row>

     </div>
     <TwoAnniu />
      </div>
    )
  }
}

export default Ftwo ;
