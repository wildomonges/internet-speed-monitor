import React, { Component } from 'react';
import Chart from 'react-google-charts';

class App extends Component {
  render(){
    return(
      <div>
        <nav>
          <div className="nav-wrapper lighten-3">
            <a className="brand-logo center">Speed Monitor</a>
          </div>
        </nav>
        <div className="container">
          <div className="row center">
            <Chart
              width={'100%'}
              height={'500px'}
              chartType="LineChart"
              loader={<div>Loading Chart</div>}
              data={[
                ['x', 'download', 'upload'],
                [0, 0, 0],
                [1, 10, 5],
                [2, 23, 15],
                [3, 17, 9],
                [4, 18, 10],
                [5, 9, 5],
                [6, 11, 3],
                [7, 27, 19],
              ]}
              options={{
                hAxis: {
                  title: 'Time',
                },
                vAxis: {
                  title: 'Popularity',
                },
                series: {
                  1: { curveType: 'function' },
                },
              }}
              rootProps={{ 'data-testid': '2' }}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
