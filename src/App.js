import React,{PropTypes} from 'react';
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  constructor(){
    super();
    this.state={
      info:{},
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/Gqq475')
    .then(function(res){
      this.setState({
        info:res.data,
        wait:false
      })
    }.bind(this))
  }
  render () {
    let x =  <CircularProgress />
    return(
      <div>
        {this.state.wait ? x:
           <div>
             {this.state.info.login}
             <img src={this.state.info.avatar_url} />
           </div>
       }
      </div>
    )
  }
}
App.childContextTypes = {
  muiTheme: React.  PropTypes.object.isRequired,
};
export default App;
