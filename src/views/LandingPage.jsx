import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import patientResponseNhsNumber from '../api/requests';

const StyledDiv = styled('div')({
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'flex-start',
});

const handleSubmit = (e) => {
  e.preventDefault();
  // patientResponseNhsNumber();
};

const LandingPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
      }}
    >
      <form>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} sm={9}>
            <TextField
              id="outlined-basic"
              label="Date Of Birth"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              id="outlined-basic"
              label="NHS Number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              id="outlined-basic"
              label="Given Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              id="outlined-basic"
              label="Family Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LandingPage;
