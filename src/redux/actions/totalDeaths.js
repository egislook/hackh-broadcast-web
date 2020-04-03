import api from "../../utils/api";
import { FETCH_TOTAL_DEATHS_SUCCESS, FETCH_TOTAL_DEATHS_STARTED, FETCH_TOTAL_DEATHS_FAILURE } from "../types/types";


export const fetchDeathCases = () => {
  return async dispatch => {
    dispatch(fetchDeathCasesStarted());
    try {
      const res = await api.fetchDeathCases()
      dispatch(fetchDeathCasesSuccess(res.data));
    } catch (error) {
      dispatch(fetchDeathCasesFailure(error));
    }
  };
};



const fetchDeathCasesSuccess = cases => ({
  type: FETCH_TOTAL_DEATHS_SUCCESS,
  payload: {
    ...cases
  }
});

const fetchDeathCasesStarted = () => ({
  type: FETCH_TOTAL_DEATHS_STARTED
});

const fetchDeathCasesFailure = error => ({
  type: FETCH_TOTAL_DEATHS_FAILURE,
  payload: {
    error
  }
});