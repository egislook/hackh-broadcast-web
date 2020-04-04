import api from '../../utils/api';
import { VALIDATE_TOKEN_START, VALIDATE_TOKEN_SUCCESS, VALIDATE_TOKEN_FAIL, SAVE_AUTH_TOKEN, SAVE_PHONE } from '../types/types';

export const validateToken = () => async (dispatch) => {
  dispatch(validateTokenStarted());
  try {
    const res = await api.getMe();
    dispatch(validateTokenSuccess(res.data));
  } catch (error) {
    dispatch(validateTokenFail(error));
  }
};

export const saveAuthToken = (token) => (dispatch) => {
  dispatch({
    type: SAVE_AUTH_TOKEN,
    payload: token,
  });
};

export const savePhone = (phone) => (dispatch) => {
  dispatch({
    type: SAVE_PHONE,
    payload: phone,
  });
};


const validateTokenStarted = () => ({
  type: VALIDATE_TOKEN_START,
});

const validateTokenSuccess = () => ({
  type: VALIDATE_TOKEN_SUCCESS,
});

const validateTokenFail = (error) => ({
  type: VALIDATE_TOKEN_FAIL,
  payload: {
    error,
  },
});
