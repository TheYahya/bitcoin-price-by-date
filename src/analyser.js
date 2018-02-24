import axios from 'axios';
const parse = require('csv-parse/lib/sync');
import { URL } from './strings';
import addZero from 'add-zero';

/**
 * Fetch csv data
 * @param {string} link
 * @return {string}
 */
export const fetchData = async (link) => {
  let response = await axios.get(link);
  return response.data;
};


/**
 * @param {string} date
 * @return {mixed}
 */
export const getBitcoinPriceByDate = async (a, b = null, c = null) => {
  let rawData = await fetchData(URL);
  // Parse csv data asynchronous
  let data = parse(rawData);

  // TODO: Check input values correction
  let date = typeof a === 'string' ? a : null;
  if (!date) {
    if (typeof a === 'object') {
      date = `${a[0]}-${addZero(a[1])}-${addZero(a[2])}`;
    }

    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
      date = `${a}-${addZero(b)}-${addZero(c)}`;
    }
  }

  for (let i = 0; i < data.length; i += 1) {
    if (data[i][0] === date + ' 00:00:00') {
      return data[i][1];
    }
  }

  return null;
};
