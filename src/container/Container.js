import React, { PropTypes } from 'react'
import One from './one/One';
import Two from './two/Two';
import Three from './three/Three';
import Four from './four/Four';
import Five from './five/Five';
import Six from './six/Six';
import Seven from './seven/Seven'
class Container extends React.Component {
  render () {
    return(
      <div>
      <One />
      <Two />
      <Three />
      <Four />
      <Five />
      <Six />
      <Seven />
      </div>
    )
  }
}

export default Container;
