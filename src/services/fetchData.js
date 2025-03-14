import axios from 'axios';

const baseUrl = 'https://utrack.com.ua';
const stockUrl = '/data/stock.json';
const reviewsUrl = '/data/reviews.json';
const descrUrl = '/data/description.json';
const questionsUrl = '/data/questions.json';

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

export const getQuestions = async () => {
  const res = await axios.get(`${baseUrl}${questionsUrl}`);
  return res;
};
