import React, { Component } from 'react';
import { isEmpty } from 'lodash';

import { fetchReports } from '../common/api';
import { chartDataWithHeader, extractChartDataFromResponse } from '../common/utils';
import { CHART_OPTIONS, CHART_ROOT_PROPS } from '../common/constants';

import MyChart from '../components/MyChart';

/**
 * MyChart Container
 */
class MyChartContainer extends Component {

  constructor(props){
    super(props);
    this.state = {data: [], header: ['date', 'ping', 'download', 'upload']};
  }

  fetchNewReports = async () => {
    const reports = await fetchReports();
    
    if (!isEmpty(reports)) {
      const data = extractChartDataFromResponse(reports);
      this.setState({data});
    }
  }

  handleRefreshClick = () => {
    console.log('entro');
    this.fetchNewReports();
  }

  componentDidMount = () => {
    this.fetchNewReports();
  }
  render(){
    const { header, data } = this.state
    const chartData = chartDataWithHeader(header, data);
    

    return (
      <React.Fragment>
      <MyChart data={chartData} options={CHART_OPTIONS} rootProps={CHART_ROOT_PROPS} />
      <button className="btn waves-effect blue waves-light" name="action" onClick={this.handleRefreshClick}>Refresh
        <i className="material-icons right">autorenew</i>
      </button>
      </React.Fragment>
    )
  }
}

export default MyChartContainer;