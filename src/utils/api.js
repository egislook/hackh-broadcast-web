import axios from 'axios';
import { auth } from 'firebase/app';
import { getToken } from './helpers';


const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
instance.interceptors.request.use((config) => {
  const token = getToken();
  console.log('send with stoken', token);
  config.headers.Authorization = `${token && `BEARER ${token}`}`;
  return config;
});


const sendMessage = (options) => instance.post('/telegram', options);
const fetchMessages = (options) => instance.get('/messages', options);
const fetchUserInfo = (options) => instance.get('/me', options);
const login = (token) => auth().signInWithCustomToken(token);
const getIdTokenResult = () => auth().currentUser.getIdTokenResult();
const logout = () => auth().signOut();
const requestOtp = (phone) => instance.post('/auth', { phone });
const authenticateOtp = (phone, code) => instance.post('/auth', { phone, code });

const getMe = () => instance.get('/me');

export default {
  sendMessage,
  fetchMessages,
  fetchUserInfo,
  login,
  logout,
  requestOtp,
  authenticateOtp,
  getMe,
  getIdTokenResult,
};
