'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

class OpenGraphElement {
  constructor({ url, buttons = [] }) {
    this.url = url;
    this.buttons = buttons;

    const res = {
      url: this.url
    };

    if (this.buttons.length) {
      if (this.buttons.length > _constants.OPEN_GRAPH_MAX_BUTTONS) {
        throw new Error(`Open graph templates sent via the Send API support a maximum of ${_constants.OPEN_GRAPH_MAX_BUTTONS} buttons of any type.`);
      }
      res.buttons = this.buttons;
    }

    return res;
  }
}

exports.default = OpenGraphElement;