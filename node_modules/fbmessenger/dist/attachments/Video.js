'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BaseAttachment = require('./BaseAttachment');

var _BaseAttachment2 = _interopRequireDefault(_BaseAttachment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Video extends _BaseAttachment2.default {
  constructor({ url = false, is_reusable = false, attachment_id = '' }) {
    super({
      type: 'video',
      url,
      is_reusable,
      attachment_id
    });
  }
}

exports.default = Video;