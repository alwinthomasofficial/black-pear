import React from 'react';
import ResultsList from '../components/ResultsList';

import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { styled } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const theme = createTheme();

const StyledButton = styled(Button)({
  fontWeight: 'bold',
  padding: theme.spacing(1, 2),
});

const ResultsPage = () => {
  const location = useLocation();
  const results = location.state;

  const tableData = [];
  results.forEach((result) => {
    const { resource } = result;
    tableData.push({
      id: resource.id,
      name: `${resource.name[0].given[0]} ${resource.name[0].family}`,
      dateOfBirth: resource.birthDate,
      nhsNumber: resource.identifier[0].value,
    });
  });

  return (
    <>
      <Grid container flexDirection="column">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <StyledButton
            component={Link}
            startIcon={<KeyboardBackspaceIcon />}
            to="/"
            variant="text"
            sx={{ fontWeight: 'bold' }}
          >
            Back To Search
          </StyledButton>
        </Grid>

        <ResultsList resultsData={tableData} />
      </Grid>
    </>
  );
};

export default ResultsPage;
