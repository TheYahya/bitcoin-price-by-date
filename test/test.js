var assert = require('assert');
var expect = require('chai').expect;
const analyser = require('../lib/analyser.js');
const url = require('../lib/strings').URL;

describe('Analyser', () => {
  describe('#fetchData()', () => {
    it('should return string', async () => {
      const data = await analyser.fetchData(url);
      expect(data).to.be.a('string');
    });
  });

  describe('#getBitcoinPriceByDate()', () => {
    it('should return the right price', async () => {
      const price = await analyser.getBitcoinPriceByDate('2018-02-01');
      assert.equal(price, '9083.258333333333');
    });
  });
});
