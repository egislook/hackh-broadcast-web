import { combineReducers } from 'redux';
import totalConfirmed from './totalConfirmed';
import totalDeaths from './totalDeaths';
import totalRecovered from './totalRecovered';
// import dailyReports from './dailyReports';

export default combineReducers({
  totalConfirmed,
  totalDeaths,
  totalRecovered,
  // dailyReports,
})