import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledDiv = styled('div')({
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
});

const LandingPage = () => {
  return (
    <StyledDiv className="container">
      <h1>Landing Page</h1>
    </StyledDiv>
  );
};

export default LandingPage;
