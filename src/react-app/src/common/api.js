// Base URI for express api
const BASE_URI = 'http://localhost:3001';

/**
 * This function fetchs reports from backend api
 */
const fetchReports = async () => {
  const response = await fetch(`${BASE_URI}/api/reports`);
  const { reports } = await response.json();
  
  return reports;
}

// Export functions 
export { fetchReports };