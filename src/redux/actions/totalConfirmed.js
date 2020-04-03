import api from '../../utils/api';
import { FETCH_TOTAL_CONFIRMED_SUCCESS, FETCH_TOTAL_CONFIRMED_STARTED, FETCH_TOTAL_CONFIRMED_FAILURE } from '../types/types';

export const fetchConfirmedCases = () => async (dispatch) => {
  dispatch(fetchConfirmedCasesStarted());
  try {
    const res = await api.fetchConfirmedCases();
    dispatch(fetchConfirmedCasesSuccess(res.data));
  } catch (error) {
    console.log('error', error);

    dispatch(fetchConfirmedCasesFailure(error));
  }
};


export const fetchConfirmedCasesSuccess = (cases) => ({
  type: FETCH_TOTAL_CONFIRMED_SUCCESS,
  payload: {
    ...cases,
  },
});

const fetchConfirmedCasesStarted = () => ({
  type: FETCH_TOTAL_CONFIRMED_STARTED,
});

const fetchConfirmedCasesFailure = (error) => ({
  type: FETCH_TOTAL_CONFIRMED_FAILURE,
  payload: {
    error,
  },
});
