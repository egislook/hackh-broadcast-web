import api from '../../utils/api';
import { SEND_MESSAGE, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAIL, ON_MESSAGE_RESET, ON_MESSAGE_CHANGE } from '../types/types';

export const sendMessage = (message) => async (dispatch) => {
  dispatch(sendMessageStarted());
  try {
    const res = await api.sendMessage(message);
    dispatch(sendMessageSuccess(res.data));
  } catch (error) {
    dispatch(sendMessageFail(error));
  }
};


export const onMessageChange = (message) => ({
  type: ON_MESSAGE_CHANGE,
  payload: message,
});
export const onMessageReset = () => ({
  type: ON_MESSAGE_RESET,
});

export const sendMessageSuccess = () => ({
  type: SEND_MESSAGE_SUCCESS,
});

const sendMessageStarted = () => ({
  type: SEND_MESSAGE,
});

const sendMessageFail = (error) => ({
  type: SEND_MESSAGE_FAIL,
  payload: {
    error,
  },
});
