/* eslint-disable */
// var csv is the CSV file with headers
export const csvToJSON = (csv) => {
  const result = csvToJs(csv);

  // return result; //JavaScript object
  return JSON.stringify(result); // JSON
};

export const csvToJs = (csv) => {
  const lines = csv.split('\n');

  const result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  const headers = lines[0].split(',');

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(',');

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }
  return result;
};

export const getToken = () => {
  try {
    const currentSession = JSON.parse(localStorage.getItem('state')).auth.token.token;

    if (!currentSession) {
      throw Error();
    }
    return currentSession;
  } catch (err) {
    return null;
  }
};
