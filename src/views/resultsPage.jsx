import React from 'react';

import { Link, useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  console.log('Test 1');
  console.log('data here', location.state);
  //   location.state &&
  //     location.state.data &&
  //     console.log('Route data', location.state.data);
  return <h2>Results</h2>;
};

export default ResultsPage;
