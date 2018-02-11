import axios from 'axios';
const parse = require('csv-parse/lib/sync');
import { URL } from './strings';


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
export const getBitcoinPriceByDate = async (date) => {
  let rawData = await fetchData(URL);
  // Parse csv data asynchronous
  let data = parse(rawData);
  for (let i = 0; i < data.length; i += 1) {
    if (data[i][0] === date + ' 00:00:00') {
      return data[i][1];
    }
  }

  return null;
};
