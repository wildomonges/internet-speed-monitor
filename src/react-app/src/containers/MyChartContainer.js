import React, { Component } from 'react';
import MyChart from '../components/MyChart'

class MyChartContainer extends Component {

  constructor(props){
    super(props);
    this.state = {data: [], header: ['date', 'ping', 'download', 'upload']};
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3001/api/reports');
    const { reports } = await response.json();
    console.log(reports);
    if (reports.length > 0) {
      const data = reports.map( r => [r['date'], r['ping'], r['upload'], r['download']]);
      console.log(data);
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