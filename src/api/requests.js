import fetch from 'node-fetch';

const X_API_KEY = 'eXyaAcJ9fhpLuhB42YwKQOJ7XgmVYOaP';

const AUTH = 'Basic dGVzdHVzZXJAYmxhY2twZWFyLmNvbTphcmVxdWVzdA==';

const BASE_URL =
  'https://59ae2c9240f849f6ac.develop.eu-west-2.quickfhir.cloud/FHIR/Patient';

const patientResponseNhsNumber = async () => {
  const response = await fetch(
    `${BASE_URL}?identifier=https://fhir.nhs.uk/Id/nhs-number%7C9449306532`,
    {
      method: 'GET',
      headers: {
        'x-api-key': X_API_KEY,
        Authorization: AUTH,
      },
    }
  ).then((response) => response.json());
  console.log(response);
};

patientResponseNhsNumber();
