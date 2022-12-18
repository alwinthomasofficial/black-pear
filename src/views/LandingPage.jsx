import React, { useReducer, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import patientResponse from '../api/requests';
import { useNavigate } from 'react-router-dom';
import {
  UPDATE_FORM,
  onInputChange,
  onInputFocusChange,
  validateInput,
} from '../utils/formUtils';

const initialState = {
  givenName: { value: '', wasSelected: false, hasError: false, errorText: '' },
  familyName: { value: '', wasSelected: false, hasError: false, errorText: '' },
  dateOfBirth: {
    value: '',
    wasSelected: false,
    hasError: false,
    errorText: '',
  },
  nhsNumber: { value: '', wasSelected: false, hasError: false, errorText: '' },
  isFormValid: false,
};

const formsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, errorText, wasSelected, isFormValid } =
        action.data;
      return {
        ...state,
        // updates the value of the corresponding input field using the name as the key
        [name]: { ...state[name], value, hasError, errorText, wasSelected },
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
  const theme = createTheme();
  // formState returns the current state of the form
  const [formState, dispatch] = useReducer(formsReducer, initialState);

  const [formError, setFormError] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const userInputs = [];

  const formSubmitHandler = (e) => {
    try {
      e.preventDefault();
      setLoading(true);

      let isFormValid = true;

      console.log('userInputs here:', userInputs);

      for (const name in formState) {
        const item = formState[name];
        userInputs.push({ formField: name, formValue: item.value });
        console.log('userInputs here:', userInputs);
        const { value } = item;
        console.log('value here:', value);
        const { hasError, errorText } = validateInput(name, value);
        if (hasError) {
          isFormValid = false;
        }
        if (name) {
          dispatch({
            type: UPDATE_FORM,
            data: {
              name,
              value,
              hasError,
              errorText,
              wasSelected: true,
              isFormValid,
            },
          });
        }
      }
      let atleastOneField = userInputs.some(
        (obj) => typeof obj.formValue === 'string' && obj.formValue !== ''
      );
      console.log('atleastOneField here:', atleastOneField);

      if (!isFormValid) {
        setFormError(true);
      } else if (!atleastOneField) {
        setFormError(true);
      } else {
        const inputFields = userInputs.filter(
          (obj) => typeof obj.formValue === 'string'
        );
        const response = patientResponse(inputFields);
        response.then(function (result) {
          console.log('result here:', result);
          setLoading(false);
          if (result.entry.length > 0) {
            navigate('/results', { state: result.entry });
          }
        });
      }
    } catch (error) {
      console.log('error here:', error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="start"
      sx={{
        minWidth: '100vw',
        minHeight: '100vh',
      }}
    >
      {loading && <CircularProgress />}
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          margin: theme.spacing(5, 0, 3, 0),
        }}
      >
        Patient Search
      </Typography>
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
              id="givenNameInput"
              label="Given Name"
              name="givenName"
              variant="outlined"
              value={formState.givenName.value}
              onChange={(e) => {
                onInputChange('givenName', e.target.value, dispatch, formState);
              }}
              onBlur={(e) => {
                onInputFocusChange(
                  'givenName',
                  e.target.value,
                  dispatch,
                  formState
                );
              }}
              error={formState.givenName.hasError}
              helperText={
                formState.givenName.hasError
                  ? formState.givenName.errorText
                  : ''
              }
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              id="familyNameInput"
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
              onBlur={(e) => {
                onInputFocusChange(
                  'familyName',
                  e.target.value,
                  dispatch,
                  formState
                );
              }}
              error={formState.familyName.hasError}
              helperText={
                formState.familyName.hasError
                  ? formState.familyName.errorText
                  : ''
              }
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              id="dateOfBirthInput"
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
              onBlur={(e) => {
                onInputFocusChange(
                  'dateOfBirth',
                  e.target.value,
                  dispatch,
                  formState
                );
              }}
              error={formState.dateOfBirth.hasError}
              helperText={
                formState.dateOfBirth.hasError
                  ? formState.dateOfBirth.errorText
                  : ''
              }
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              id="nhsNumberInput"
              label="NHS Number"
              name="nhsNumber"
              variant="outlined"
              value={formState.nhsNumber.value}
              onChange={(e) => {
                onInputChange('nhsNumber', e.target.value, dispatch, formState);
              }}
              onBlur={(e) => {
                onInputFocusChange(
                  'nhsNumber',
                  e.target.value,
                  dispatch,
                  formState
                );
              }}
              error={formState.nhsNumber.hasError}
              helperText={
                formState.nhsNumber.hasError
                  ? formState.nhsNumber.errorText
                  : ''
              }
            />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Button
              variant="contained"
              onClick={(e) => {
                formSubmitHandler(e);
              }}
              disabled={loading || !formState.isFormValid}
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
