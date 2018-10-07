'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseTemplate = require('./BaseTemplate');

var _BaseTemplate2 = _interopRequireDefault(_BaseTemplate);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GenericTemplate extends _BaseTemplate2.default {
  constructor({ elements, image_aspect_ratio = 'horizontal', sharable = true }) {
    super(elements);

    if (_constants.IMAGE_ASPECT_RATIO_TYPES.indexOf(image_aspect_ratio) === -1) {
      throw new Error('Invalid image aspect ratio type provided.');
    }

    return {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'generic',
          sharable,
          image_aspect_ratio,
          elements
        }
      }
    };
  }
}

exports.default = GenericTemplate;