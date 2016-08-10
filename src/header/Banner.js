import React, { PropTypes } from 'react'
import Carousel from 'react-bootstrap/lib/Carousel'
class Banner extends React.Component {
  render () {
    return(
      <Carousel>
        <Carousel.Item>
          <img  src="https://github.com/Gqq475/deploy/blob/master/src/img/banner.jpg?raw=true"/>
        </Carousel.Item>
        <Carousel.Item>
          <img  src="https://github.com/Gqq475/deploy/blob/master/src/img/banner.jpg?raw=true"/>

        </Carousel.Item>
        <Carousel.Item>
          <img  src="https://github.com/Gqq475/deploy/blob/master/src/img/banner.jpg?raw=true"/>
        
        </Carousel.Item>
    </Carousel>
    )
  }
}

export default Banner;
