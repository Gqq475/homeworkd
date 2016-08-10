import React,{PropTypes} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Header from './header/Header'
import Container from './container/Container'
class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render(){
    return(
      <div>
      <Header />
      <Container />
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.  PropTypes.object.isRequired,
};
export default App;
