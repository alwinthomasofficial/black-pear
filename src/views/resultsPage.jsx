import React from 'react';

import { Link, useLocation } from 'react-router-dom';

const ResultsPage = () => {
  const location = useLocation();
  console.log('Test 1');
  console.log('data here', location.state);
  const results = location.state;

  const tableData = [];
  results.forEach((result) => {
    const { resource } = result;
    tableData.push({
      name: `${resource.name[0].given[0]} ${resource.name[0].family}`,
      dateOfBirth: resource.birthDate,
      nhsNumber: resource.identifier[0].value,
    });
  });
  console.log('tableData here:', tableData);

  //   location.state &&
  //     location.state.data &&
  //     console.log('Route data', location.state.data);
  return <h2>Results</h2>;
};

export default ResultsPage;
