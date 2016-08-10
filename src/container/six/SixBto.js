import React, { PropTypes } from 'react'
import Carousel from 'react-bootstrap/lib/Carousel'
class SixBto extends React.Component {
  render () {
    let styles={
      big:{
        width:'70%',
        margin:'0 auto',
        marginBottom:'30px',
        borderBottom:'2px solid #ccc'
      },

    }
    return(
      <Carousel style={styles.big}>
        <Carousel.Item >
          <img  src="http://oboi4l44j.bkt.clouddn.com/blzp_76.jpg"/>
        </Carousel.Item>
        <Carousel.Item >
          <img  src="http://oboi4l44j.bkt.clouddn.com/txzp_78.jpg"/>

        </Carousel.Item>
        <Carousel.Item >
          <img  src="http://oboi4l44j.bkt.clouddn.com/grzp_81.jpg"/>
        </Carousel.Item>
    </Carousel>
    )
  }
}

export default SixBto;
