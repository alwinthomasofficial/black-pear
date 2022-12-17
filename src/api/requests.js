import fetch from 'node-fetch';

const X_API_KEY = 'eXyaAcJ9fhpLuhB42YwKQOJ7XgmVYOaP';

const AUTH = 'Basic dGVzdHVzZXJAYmxhY2twZWFyLmNvbTphcmVxdWVzdA==';

const BASE_URL =
  'https://59ae2c9240f849f6ac.develop.eu-west-2.quickfhir.cloud/FHIR/Patient?';

const patientResponse = async (inputFields) => {
  const urlParams = [];
  inputFields.forEach((e) => {
    if (e.formValue !== '') {
      switch (e.formField) {
        case 'givenName':
          urlParams.push({ formField: 'given', formValue: e.formValue });
          break;
        case 'familyName':
          urlParams.push({ formField: 'family', formValue: e.formValue });
          break;
        case 'dateOfBirth':
          urlParams.push({ formField: 'birthdate', formValue: e.formValue });
          break;
        case 'nhsNumber':
          urlParams.push({
            formField: 'identifier',
            formValue: `https://fhir.nhs.uk/Id/nhs-number${e.formValue}`,
          });
          break;
        default:
          break;
      }
    }
  });
  console.log('urlParams:', urlParams);
  const params = new URLSearchParams();
  urlParams.forEach((e) => params.append(e.formField, e.formValue));
  console.log('params:', params.toString());

  const finalUrl = `${BASE_URL}${params.toString()}`;
  console.log('finalUrl:', finalUrl);
  const response = await fetch(finalUrl, {
    method: 'GET',
    headers: {
      'x-api-key': X_API_KEY,
      Authorization: AUTH,
    },
  }).then((response) => response.json());
  return response;
};

export default patientResponse;
