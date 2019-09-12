const CHART_OPTIONS = {
  hAxis: {
    title: 'Time',
    logScale: true,
  },
  vAxis: {
    title: 'Measurement',
  },
  series: {
    1: { curveType: 'function' },
  },
};

const CHART_ROOT_PROPS = { 'data-testid': '2' };

export { CHART_OPTIONS, CHART_ROOT_PROPS };