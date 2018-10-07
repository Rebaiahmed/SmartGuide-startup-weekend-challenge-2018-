'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseTemplate = require('./BaseTemplate');

var _BaseTemplate2 = _interopRequireDefault(_BaseTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OpenGraphTemplate extends _BaseTemplate2.default {
  constructor({ elements }) {
    super(elements);

    return {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'open_graph',
          elements
        }
      }
    };
  }
}

exports.default = OpenGraphTemplate;