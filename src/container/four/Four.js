import React, { PropTypes } from 'react'
import Top from './Top';
import Center from './Center';
import Btn from './Btn';

class Four extends React.Component {
  render () {
    return(
      <div>
      <Top />
      <Center />
      <Btn />
      </div>
    )
  }
}

export default Four;
