# unique-words-count [![NPM downloads](https://img.shields.io/npm/dm/unique-words-count.svg?style=flat)](https://npmjs.org/package/unique-words-count) [![Linux Build Status](https://img.shields.io/travis/thibaultboursier/unique-words-count.svg?style=flat&label=Travis)](https://travis-ci.org/thibaultboursier/unique-words-count)
It returns unique words from a text.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save unique-words-count
```

## Usage

```js
const uniqueWordsCount = require('unique-words-count');

const text = "It was a nice day. It was the best day in my life."

console.log(uniqueWordsCount(text)) //=> 10
