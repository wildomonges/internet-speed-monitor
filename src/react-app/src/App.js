import React, { Component } from 'react';
import MyChartContainer from './containers/MyChartContainer';

class App extends Component {
  render(){
    return(
      <div>
        <nav>
          <div className="nav-wrapper blue darken-4">
            <a className="brand-logo center">Speed Monitor</a>
          </div>
        </nav>
        <div className="container">
          <div className="row center">
            <MyChartContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
