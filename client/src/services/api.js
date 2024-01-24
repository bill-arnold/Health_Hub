// services/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000', // Replace with your Flask API base URL
});

export default instance;
