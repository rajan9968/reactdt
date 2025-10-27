import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:50000/', // backend URL
    headers: { 'Content-Type': 'application/json' },
});

export default api;
