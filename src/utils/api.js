import axios from 'axios';

const TOTAL_CONFIRMED_ENDPOINT = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';


const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


const fetchConfirmedCases = () => axios.get(TOTAL_CONFIRMED_ENDPOINT);

const sendMessage = (options) => instance.post('/telegram', options);
const fetchMessages = (options) => instance.get('/messages', options);
const fetchUserInfo = (options) => instance.get('/me', options);
const login = (options) => instance.post('/login', options);
const logout = (options) => instance.post('/logout', options);
const requestOtp = (options) => instance.post('/request-otp', options);
const authenticateOtp = (options) => instance.post('/authenticate-otp', options);

export default {
  fetchConfirmedCases,
  sendMessage,
  fetchMessages,
  fetchUserInfo,
  login,
  logout,
  requestOtp,
  authenticateOtp,
};
