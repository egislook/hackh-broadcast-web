import { FETCH_TOTAL_RECOVERED_SUCCESS, FETCH_TOTAL_RECOVERED_STARTED, FETCH_TOTAL_RECOVERED_FAILURE } from "../types/types";
const initialState = {
  loading: false,
  cases: {},
  error: null
};
export default function totalRecovered(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOTAL_RECOVERED_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_TOTAL_RECOVERED_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cases: {...state.cases, ...action.payload}
      };
    case FETCH_TOTAL_RECOVERED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state
  }
}
