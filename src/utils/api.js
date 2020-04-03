import { format } from 'date-fns'
import axios from 'axios'

const TOTAL_CONFIRMED_ENDPOINT = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
const TOTAL_DEATH_ENDPOINT = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv';
const TOTAL_RECOVERED_ENDPOINT = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv';


const DAILY_REPORTS = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports"


const fetchConfirmedCases = () => {
  return axios.get(TOTAL_CONFIRMED_ENDPOINT);
}

const fetchDeathCases = () => {
  return axios.get(TOTAL_DEATH_ENDPOINT);
}

const fetchRecoveredCases = () => {
  return axios.get(TOTAL_RECOVERED_ENDPOINT);
}

const fetchDailyReport = (date = format(new Date(), 'MM-dd-yyyy')) => {
  return axios.get(`${DAILY_REPORTS}/${date}.csv`);
}

export default {
  fetchConfirmedCases,
  fetchDeathCases,
  fetchRecoveredCases,
  fetchDailyReport,
}