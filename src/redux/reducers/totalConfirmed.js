import { FETCH_TOTAL_CONFIRMED_SUCCESS, FETCH_TOTAL_CONFIRMED_STARTED, FETCH_TOTAL_CONFIRMED_FAILURE } from "../types/types";
const initialState = {
  loading: false,
  cases: {},
  error: null
};
export default function totalConfirmed(state = initialState, action) {
  switch (action.type) {
    case FETCH_TOTAL_CONFIRMED_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_TOTAL_CONFIRMED_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cases: {...state.cases, ...action.payload}
      };
    case FETCH_TOTAL_CONFIRMED_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state
  }
}
