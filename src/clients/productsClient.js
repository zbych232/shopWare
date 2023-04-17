import axios from 'axios';

const axiosHeaders = {
  headers: { 'sw-access-key': 'SWSCMDV3N2DIOUNZTKNNCTBBCW' },
};

export const getSearchProducts = queryBody =>
  axios.post(
    'https://demo.crehler.dev/store-api/search',
    {
      ...queryBody,
    },
    {
      ...axiosHeaders,
    },
  );

export const getProducts = queryBody =>
  axios.post(
    'https://demo.crehler.dev/store-api/product-listing/e435c9763b0d44fcab67ea1c0fdb3fa0',
    {
      ...queryBody,
    },
    {
      ...axiosHeaders,
    },
  );
