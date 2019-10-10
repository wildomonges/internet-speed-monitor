const moment = require('moment');
/**
 * Return array2D with header included
 * @param {array1D} header 
 * @param {array2D} data 
 */
const chartDataWithHeader = (header, data) => {
  return [header].concat(data);
}

const extractChartDataFromResponse = data => {
  return data.map(row => [moment(row['date']).format('DD/MM HH:mm'), row['upload'], row['download']]);
}

export { chartDataWithHeader, extractChartDataFromResponse };