import React, { Component } from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';

class MyChart extends Component {
  render(){
    const { width, height, chartType, data, options, rootProps } = this.props;

    return(
      <Chart
        width={width}
        height={height}
        chartType={chartType}
        loader={<div>Loading Chart</div>}
        data={data}
        options={options}
        rootProps={rootProps}
      />
      )
  }
}

MyChart.defaultProps = {
  width: '100%',
  height: '500px',
  chartType: 'LineChart',
}

MyChart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  chartType: PropTypes.string,
  data: PropTypes.array.isRequired,
  options: PropTypes.object.isRequired,
  rootProps: PropTypes.object.isRequired,
}
export default MyChart;