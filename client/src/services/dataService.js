import axios from 'axios';


import {
  mockUserData,
  mockUserActivity,
  mockUserAverageSessions,
  mockUserPerformance
} from './mockUserData';

const API_BASE_URL = 'http://127.0.0.1:3000';
const USE_MOCK = true;

export const fetchUserData = async (userId) => {
  if (USE_MOCK) {
    const user = mockUserData.find(user => user.id === userId);
    if (!user) {
      throw new Error(`User data not found for userId ${userId}`);
    }
    return { data: user };
  }
  const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
  return response.data;
};

export const fetchUserActivity = async (userId) => {
  if (USE_MOCK) {
    const activity = mockUserActivity.find(activity => activity.userId === userId);
    if (!activity) {
      throw new Error(`User activity not found for userId ${userId}`);
    }
    return { sessions: activity.sessions  };
  }
  const response = await axios.get(`${API_BASE_URL}/user/${userId}/activity`);
  return response.data.data;
};

export const fetchUserAverageSessions = async (userId) => {
  if (USE_MOCK) {
    const sessions = mockUserAverageSessions.find(session => session.userId === userId);
    if (!sessions) {
      throw new Error(`User average sessions not found for userId ${userId}`);
    }
    return { data: { sessions: sessions.sessions } }; 
  }
  const response = await axios.get(`${API_BASE_URL}/user/${userId}/average-sessions`);
  return response.data;
};


export const fetchUserPerformance = async (userId) => {
  if (USE_MOCK) {
    const performance = mockUserPerformance.find(performance => performance.userId === userId);
    if (!performance) {
      throw new Error(`User performance data not found for userId ${userId}`);
    }
    return { data: performance };
  }
  const response = await axios.get(`${API_BASE_URL}/user/${userId}/performance`);
  return response.data;
};
