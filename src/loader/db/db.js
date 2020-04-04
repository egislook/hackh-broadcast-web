import { database } from 'firebase/app';

const db = database().ref('telegram');
db.on('value', (snapshot) => {
  const data = snapshot.val() || {};
  const messages = [];
  snapshot.forEach((child) => messages.push(child.val()));
  // it should trigger every time there are some changes happening
  console.log('database', messages);
  console.log('data', data);
});
