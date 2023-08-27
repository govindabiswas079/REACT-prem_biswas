import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:8080/api' });


export const getpermission = () => API.get(`/permission/permission`);