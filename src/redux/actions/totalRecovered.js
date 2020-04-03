import api from '../../utils/api';
import { FETCH_TOTAL_RECOVERED_SUCCESS, FETCH_TOTAL_RECOVERED_STARTED, FETCH_TOTAL_RECOVERED_FAILURE } from '../types/types';

export const fetchRecoveredCases = () => async (dispatch) => {
  dispatch(fetchRecoveredCasesStarted());
  try {
    const res = await api.fetchRecoveredCases();
    dispatch(fetchRecoveredCasesSuccess(res.data));
  } catch (error) {
    dispatch(fetchRecoveredCasesFailure(error));
  }
};


export const fetchRecoveredCasesSuccess = (cases) => ({
  type: FETCH_TOTAL_RECOVERED_SUCCESS,
  payload: {
    ...cases,
  },
});

const fetchRecoveredCasesStarted = () => ({
  type: FETCH_TOTAL_RECOVERED_STARTED,
});

const fetchRecoveredCasesFailure = (error) => ({
  type: FETCH_TOTAL_RECOVERED_FAILURE,
  payload: {
    error,
  },
});
