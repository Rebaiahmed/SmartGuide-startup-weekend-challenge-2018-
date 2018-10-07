'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

class Text {
  constructor(text) {
    if (text.length > _constants.TEXT_LIMIT) {
      throw new Error(`Text cannot be longer ${_constants.TEXT_LIMIT} characters.`);
    }

    this.text = text;

    return {
      text: this.text
    };
  }
}

exports.default = Text;