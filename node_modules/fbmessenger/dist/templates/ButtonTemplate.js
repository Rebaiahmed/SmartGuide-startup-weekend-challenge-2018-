'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

class ButtonTemplate {
  constructor({ text, buttons }) {
    if (text.length > _constants.TEXT_LIMIT) {
      throw new Error(`Text cannot be longer ${_constants.TEXT_LIMIT} characters.`);
    }

    if (!Array.isArray(buttons)) {
      throw new Error('buttons must be an array.');
    }

    this.text = text;
    this.buttons = buttons;

    return {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: this.text,
          buttons: this.buttons
        }
      }
    };
  }
}

exports.default = ButtonTemplate;