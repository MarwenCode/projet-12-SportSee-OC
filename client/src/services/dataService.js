import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:3000';

export const fetchUserData = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
  return response.data;
};

export const fetchUserActivity = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
  return response.data.data;
};

export const fetchUserAverageSessions = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`);
  return response.data;
};

export const fetchUserPerformance = async (userId) => {
  const response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`);
  return response.data;
};
