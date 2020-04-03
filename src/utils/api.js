import axios from 'axios';

const TOTAL_CONFIRMED_ENDPOINT = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
const TOTAL_DEATH_ENDPOINT = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv';
const TOTAL_RECOVERED_ENDPOINT = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv';

const fetchConfirmedCases = () => axios.get(TOTAL_CONFIRMED_ENDPOINT);

const fetchDeathCases = () => axios.get(TOTAL_DEATH_ENDPOINT);

const fetchRecoveredCases = () => axios.get(TOTAL_RECOVERED_ENDPOINT);


export default {
  fetchConfirmedCases,
  fetchDeathCases,
  fetchRecoveredCases,
};
