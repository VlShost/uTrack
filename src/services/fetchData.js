import axios from 'axios';

const baseUrl = 'https://utrack.com.ua';
const stockUrl = '/landing/stock.json';
const reviewsUrl = '/landing/reviews.json';
const descrUrl = '/landing/description.json';

export const getDescr = async () => {
  const res = await axios.get(`${baseUrl}${descrUrl}`);
  return res;
};

export const getStock = async () => {
  const res = await axios.get(`${baseUrl}${stockUrl}`);
  return res;
};

export const getReviews = async () => {
  const res = await axios.get(`${baseUrl}${reviewsUrl}`);
  return res;
};
