import axios from 'axios';


const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


const sendMessage = (options) => instance.post('/telegram', options);
const fetchMessages = (options) => instance.get('/messages', options);
const fetchUserInfo = (options) => instance.get('/me', options);
const login = (options) => instance.post('/login', options);
const logout = (options) => instance.post('/logout', options);
const requestOtp = (options) => instance.post('/request-otp', options);
const authenticateOtp = (options) => instance.post('/authenticate-otp', options);

export default {
  sendMessage,
  fetchMessages,
  fetchUserInfo,
  login,
  logout,
  requestOtp,
  authenticateOtp,
};
