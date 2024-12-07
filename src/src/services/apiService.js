// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Login function
const login = (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

// Signup function
const signup = (firstName, lastName, address, phoneNumber, email, password) => {
  return axios.post(`${API_URL}/auth/signup`, { firstName, lastName, address, phoneNumber, email, password });
};

// Fetch talents
const getTalents = () => {
  return axios.get(`${API_URL}/talent`);
};

// Fetch jobs
const getJobs = () => {
  return axios.get(`${API_URL}/jobs`);
};

export { login, signup, getTalents, getJobs };
