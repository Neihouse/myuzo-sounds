// This file would contain functions to fetch data from your backend or external APIs

// Example API call function
export const fetchData = async (endpoint) => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};