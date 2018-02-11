[![Build Status](https://travis-ci.org/TheYahya/bitcoin-price-by-date.svg?branch=master)](https://travis-ci.org/TheYahya/bitcoin-price-by-date)
[![dependencies Status](https://david-dm.org/TheYahya/bitcoin-price-by-date/status.svg)](https://david-dm.org/TheYahya/bitcoin-price-by-date)
[![devDependencies Status](https://david-dm.org/TheYahya/bitcoin-price-by-date/dev-status.svg)](https://david-dm.org/TheYahya/bitcoin-price-by-date?type=dev)
[![GitHub license](https://img.shields.io/github/license/TheYahya/bitcoin-price-by-date.svg)](https://github.com/TheYahya/bitcoin-price-by-date/blob/master/LICENSE)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/TheYahya/bitcoin-price-by-date)
# Bitcoin price by date
Get bitcoin price by date!

## Installation
```bash
$ npm install bitcoin-price-by-date
```

## Usage
```javascript
import { getBitcoinPriceByDate } from 'bitcoin-price-by-date';

(async () => {
  const price = await getBitcoinPriceByDate('2018-02-01');
  console.log(price); // return 9083.258333333333
})();
```

## Contribution
You can fork the repository, improve or fix some part of it and then send a pull requests.

And write a few tests for your code before sending pull requests.

## License

Licensed under the [MIT License](https://github.com/TheYahya/bitcoin-price-by-date/blob/master/LICENSE).