export const UPDATE_FORM = 'UPDATE_FORM';

/**
 * Triggered every time the value of the form changes
 */
export const onInputChange = (name, value, dispatch, formState) => {
  dispatch({
    type: UPDATE_FORM,
    data: {
      name,
      value,
      hasError: false,
      error: '',
      touched: false,
      isFormValid: true,
    },
  });
};

export const validateInput = (name, value) => {
  let hasError = false,
    errorText = '';
  switch (name) {
    case 'name':
      if (!/^[a-zA-Z ]+$/.test(value)) {
        hasError = true;
        errorText = 'Invalid Input. Avoid Special characters';
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
