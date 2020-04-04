import axios from 'axios';
import { auth } from 'firebase/app';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  try {
    const { token } = JSON.parse(localStorage.getItem('state')).auth;
    const idToken = token.token;
    config.headers.Authorization = idToken ? `Bearer ${idToken}` : '';
    return config;
  } catch (error) {
    console.log('error retriving token', error);
  }
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
