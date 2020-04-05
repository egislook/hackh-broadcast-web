import { database } from 'firebase/app';
import moment from "moment";

export const fetchAllMessage = async () => {
  const databaseRef = database().ref('telegram');
  return new Promise((resolve, reject) => {
    databaseRef.on('value', (snapshot) => {
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
  const result = await databaseRef.push({
    message: options.message,
    date: moment().format(),
  }).then((snap) => {
    return snap.key;
  });
  return result;
};
