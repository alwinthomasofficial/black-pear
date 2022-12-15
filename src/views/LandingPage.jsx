import React, { useReducer } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import patientResponse from '../api/requests';
import { UPDATE_FORM, onInputChange } from '../utils/formUtils';

const initialState = {
  dateOfBirth: { value: '', selected: false, hasError: true, errorText: '' },
  nhsNumber: { value: '', selected: false, hasError: true, errorText: '' },
  givenName: { value: '', selected: false, hasError: true, errorText: '' },
  familyName: { value: '', selected: false, hasError: true, errorText: '' },
  isFormValid: false,
};

const formsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, selected, isFormValid } =
        action.data;
      return {
        ...state,
        // updates the value of the corresponding input field using the name as the key
        [name]: { ...state[name], value, hasError, error, selected },
        isFormValid,
      };
    default:
      return state;
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  // patientResponse();
};

const LandingPage = () => {
  // formState returns the current state of the form
  const [formState, dispatch] = useReducer(formsReducer, initialState);

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
              label="Given Name"
              name="givenName"
              variant="outlined"
              value={formState.givenName.value}
              onChange={(e) => {
                onInputChange('givenName', e.target.value, dispatch, formState);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              id="outlined-basic"
              label="Family Name"
              name="familyName"
              variant="outlined"
              value={formState.familyName.value}
              onChange={(e) => {
                onInputChange(
                  'familyName',
                  e.target.value,
                  dispatch,
                  formState
                );
              }}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              id="outlined-basic"
              label="Date Of Birth"
              name="dateOfBirth"
              variant="outlined"
              value={formState.dateOfBirth.value}
              onChange={(e) => {
                onInputChange(
                  'dateOfBirth',
                  e.target.value,
                  dispatch,
                  formState
                );
              }}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              id="outlined-basic"
              label="NHS Number"
              name="nhsNumber"
              variant="outlined"
              value={formState.nhsNumber.value}
              onChange={(e) => {
                onInputChange('nhsNumber', e.target.value, dispatch, formState);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Button
              variant="contained"
              onClick={(e) => {
                console.log(formState);
                handleSubmit(e);
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default LandingPage;
