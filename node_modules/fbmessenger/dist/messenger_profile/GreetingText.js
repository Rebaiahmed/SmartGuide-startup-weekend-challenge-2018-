'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

class GreetingText {
  constructor({ text, locale = 'default' }) {
    if (text.length > _constants.GREETING_TEXT_LIMIT) {
      throw new Error(`Greeting Text limit is ${_constants.GREETING_TEXT_LIMIT}.`);
    }

    return {
      text,
      locale
    };
  }
}

exports.default = GreetingText;