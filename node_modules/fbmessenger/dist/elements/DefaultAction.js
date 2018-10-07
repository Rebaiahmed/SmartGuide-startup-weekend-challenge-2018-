'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DefaultAction extends _Button2.default {
  constructor({
    url,
    payload = '',
    webview_height_ratio = '',
    messenger_extensions = '',
    fallback_url = ''
  }) {
    const obj = super({
      type: 'web_url',
      title: '',
      url,
      payload,
      webview_height_ratio,
      messenger_extensions,
      fallback_url
    });

    delete obj.title;

    return obj;
  }
}

exports.default = DefaultAction;