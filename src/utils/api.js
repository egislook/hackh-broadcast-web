import axios from 'axios';
import { auth } from 'firebase/app';
import { fetchAllMessage, postMessage } from '../loader/db/db';
import { getToken } from './helpers';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

const sendMessageOnMessenger = (options) => instance.post('/messenger', options);
const sendMessage = (options) => instance.post('/telegram', options);
const fetchMessages = (options) => instance.get('/messages', options);
const fetchAllMessages = () => fetchAllMessage();
const postNewMessage = (options) => postMessage(options);
const fetchUserInfo = (options) => instance.get('/me', options);
const login = (token) => auth().signInWithCustomToken(token);
const getIdTokenResult = () => auth().currentUser.getIdTokenResult();
const logout = () => auth().signOut();
const requestOtp = (phone) => instance.post('/auth', { phone });
const authenticateOtp = (phone, code) => instance.post('/auth', { phone, code });

const getMe = () => instance.get('/me');

export default {
  sendMessageOnMessenger,
  sendMessage,
  fetchMessages,
  fetchAllMessages,
  postNewMessage,
  fetchUserInfo,
  login,
  logout,
  requestOtp,
  authenticateOtp,
  getMe,
  getIdTokenResult,
};
