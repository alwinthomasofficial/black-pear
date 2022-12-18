const UPDATE_FORM = 'UPDATE_FORM';

const returnFieldInputArray = (formState) => {
  const fieldInputArray = [];
  for (const name in formState) {
    const item = formState[name];
    fieldInputArray.push({ formField: name, formValue: item.value });
  }
  return fieldInputArray;
};

const checkForErrorsInForm = (formState, name, hasError) => {
  let isFormValid = true;
  for (const key in formState) {
    const item = formState[key];
    // Check if the current field has error
    if (key === name && hasError) {
      isFormValid = false;
      break;
    } else if (key !== name && item.hasError) {
      // Check if any other field has error
      isFormValid = false;
      break;
    }
  }
  return isFormValid;
};

/**
 * Triggered every time the value of the form changes
 */
const onInputChange = (name, value, dispatch, formState) => {
  const { hasError, errorText } = validateInput(name, value);
  const isFormValid = checkForErrorsInForm(formState, name, hasError);
  dispatch({
    type: UPDATE_FORM,
    data: {
      name,
      value,
      hasError,
      errorText,
      wasSelected: false,
      isFormValid,
    },
  });
};

/**
 * Shows error only if user has finished typing and moves onto next field
 */
const onInputFocusChange = (name, value, dispatch, formState) => {
  const { hasError, errorText } = validateInput(name, value);
  const isFormValid = checkForErrorsInForm(formState, name, hasError);

  dispatch({
    type: UPDATE_FORM,
    data: { name, value, hasError, errorText, wasSelected: true, isFormValid },
  });
};

const validateInput = (name, value) => {
  let hasError = false,
    errorText = '';
  switch (name) {
    case 'givenName':
      if (value.trim() !== '' && !/^[a-zA-Z ]+$/.test(value)) {
        hasError = true;
        errorText = 'Invalid Name. Avoid Special characters';
      } else {
        hasError = false;
        errorText = '';
      }
      break;
    case 'familyName':
      if (value.trim() !== '' && !/^[a-zA-Z ]+$/.test(value)) {
        hasError = true;
        errorText = 'Invalid Name. Avoid Special characters';
      } else {
        hasError = false;
        errorText = '';
      }
      break;
    case 'dateOfBirth':
      if (value.trim() !== '' && !/^\d{4}[-]\d{2}[-]\d{2}$/.test(value)) {
        hasError = true;
        errorText = 'Please enter in the format of YYYY-MM-DD';
      } else {
        hasError = false;
        errorText = '';
      }
      break;
    case 'nhsNumber':
      if (value.trim() !== '' && !/^[0-9]{10}$/.test(value)) {
        hasError = true;
        errorText = 'Please enter 10 numerical digits';
      } else {
        hasError = false;
        errorText = '';
      }
      break;
    default:
      break;
  }
  return { hasError, errorText };
};

export {
  onInputChange,
  validateInput,
  onInputFocusChange,
  returnFieldInputArray,
  UPDATE_FORM,
};
