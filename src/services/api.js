import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://expenses-control-node.herokuapp.com/api/',
});

export default api;
