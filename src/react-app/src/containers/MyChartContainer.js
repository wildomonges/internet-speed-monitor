import React, { Component } from 'react';
import MyChart from '../components/MyChart';
import { isEmpty } from 'lodash';

class MyChartContainer extends Component {

  constructor(props){
    super(props);
    this.state = {data: [], header: ['date', 'ping', 'download', 'upload']};
  }

  componentDidMount = async () => {
    // TODO: move fetch logic to /common/api.js 
    const URI = 'http://localhost:3001';
    const response = await fetch(`${URI}/api/reports`);
    const { reports } = await response.json();
    
    if (!isEmpty(reports)) {
      const data = reports.map( r => [r['date'], r['ping'], r['upload'], r['download']]);
      this.setState({data: data});
    }
  }
  render(){
    const { header, data } = this.state
    const chartData = [header].concat(data);
    
    const options = {
      hAxis: {
        title: 'Time',
      },
      vAxis: {
        title: 'Popularity',
      },
      series: {
        1: { curveType: 'function' },
      },
    };

    const rootProps = { 'data-testid': '2' }

    return (
      <MyChart data={chartData} options={options} rootProps={rootProps} />
    )
  }
}

export default MyChartContainer;