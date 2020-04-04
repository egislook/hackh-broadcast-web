import { VALIDATE_TOKEN_START, VALIDATE_TOKEN_SUCCESS, VALIDATE_TOKEN_FAIL, SAVE_AUTH_TOKEN, SAVE_PHONE } from '../types/types';

const initialState = {
  loading: false,
  token: '',
  phone: '',
  error: null,
};
export default function totalConfirmed(state = initialState, action) {
  switch (action.type) {
    case SAVE_AUTH_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SAVE_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case VALIDATE_TOKEN_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case VALIDATE_TOKEN_FAIL:
      return {
        ...state,
        token: '',
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
