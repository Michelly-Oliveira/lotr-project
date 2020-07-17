import axios from 'axios';

const api = axios.create({
  baseURL: 'https://the-one-api.herokuapp.com/v1',
  headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
});

export default api;
