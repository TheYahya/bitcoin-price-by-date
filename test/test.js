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
    it('should return right price with string input', async () => {
      const price = await analyser.getBitcoinPriceByDate('2018-02-01');
      assert.equal(price, '9083.258333333333');
    });

    it('should return right price with numbers input', async () => {
      const price = await analyser.getBitcoinPriceByDate(2018, 2, 1);
      assert.equal(price, '9083.258333333333');
    });

    it('should return right price with array input', async () => {
      const price = await analyser.getBitcoinPriceByDate([2018, 2, 1]);
      assert.equal(price, '9083.258333333333');
    });
  });
});
