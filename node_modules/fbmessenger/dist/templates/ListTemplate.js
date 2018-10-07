'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

class ListTemplate {
  constructor({
    elements, buttons = [], top_element_style = 'large', sharable = true
  }) {
    if (!Array.isArray(elements)) {
      throw new Error('elements must be an array.');
    }

    if (elements.length < _constants.LIST_TEMPLATE_MIN_ELEMENTS) {
      throw new Error(`You must have more than ${_constants.LIST_TEMPLATE_MIN_ELEMENTS} elements.`);
    }

    if (elements.length > _constants.LIST_TEMPLATE_MAX_ELEMENTS) {
      throw new Error(`You cannot have more than ${_constants.LIST_TEMPLATE_MAX_ELEMENTS} elements.`);
    }

    if (_constants.TOP_ELEMENT_STYLES.indexOf(top_element_style) === -1) {
      throw new Error('Invalid top_element_style provided.');
    }

    if (buttons && buttons.length > 1) {
      throw new Error(`You can have a maximum of ${_constants.LIST_TEMPLATE_MAX_BUTTONS} button`);
    }

    return {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'list',
          top_element_style,
          elements,
          sharable,
          buttons
        }
      }
    };
  }
}

exports.default = ListTemplate;