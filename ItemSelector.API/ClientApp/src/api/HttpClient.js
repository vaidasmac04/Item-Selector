import axios from 'axios';

const HttpClient = axios.create({
  baseUrl: "https://localhost:5001",
  headers: {
    'Content-type': 'application/json',
  },
});

export default HttpClient;