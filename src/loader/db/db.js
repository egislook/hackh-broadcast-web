import { database } from 'firebase/app';
import moment from "moment";

export const fetchAllMessage = async () => {
  const databaseRef = database().ref('telegram');
  const messageRef = databaseRef.child('messages');
  return new Promise((resolve, reject) => {
    messageRef.on('value', (snapshot) => {
      const data = snapshot.val() || {};
      const messages = [];
      snapshot.forEach(child => {
        messages.push(child.val())
      });
      // it should trigger every time there are some changes happening
      return resolve(messages);
    });
  });
};

export const postMessage = async (options) => {
  const databaseRef = database().ref('telegram');
  const messageRef = databaseRef.child('messages');
  messageRef.push({
    message: options.message,
    date: moment().format(),
  })
};
