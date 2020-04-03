import { FETCH_TOTAL_DEATHS_SUCCESS, FETCH_TOTAL_DEATHS_STARTED, FETCH_TOTAL_DEATHS_FAILURE } from "../types/types";
const initialState = {
  loading: false,
  cases: {},
  error: null
};
export default function totalDeaths(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOTAL_DEATHS_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_TOTAL_DEATHS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cases: {...state.cases, ...action.payload}
      };
    case FETCH_TOTAL_DEATHS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state
  }
}
