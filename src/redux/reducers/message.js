import { SEND_MESSAGE_SUCCESS, SEND_MESSAGE, SEND_MESSAGE_FAIL, ON_MESSAGE_CHANGE, ON_MESSAGE_RESET } from '../types/types';

const initialState = {
  loading: false,
  message: '',
  error: null,
};
export default function totalConfirmed(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        loading: true,
      };
    case ON_MESSAGE_CHANGE:
      return {
        ...state,
        message: action.payload,
      };
    case ON_MESSAGE_RESET:
      return {
        ...state,
        message: '',
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        message: '',
      };
    case SEND_MESSAGE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
