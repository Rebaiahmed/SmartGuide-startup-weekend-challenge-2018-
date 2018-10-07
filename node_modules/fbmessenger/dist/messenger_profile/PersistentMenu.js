'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require('../constants');

class PersistentMenu {
  constructor({ locale = 'default', call_to_actions, composer_input_disabled }) {
    if (!Array.isArray(call_to_actions)) {
      throw new Error('You must pass an array of menu item objects.');
    }

    if (call_to_actions.length > _constants.PERSISTENT_MENU_TOP_LEVEL_CTA_LIMIT) {
      throw new Error(`You cannot have more than ${_constants.PERSISTENT_MENU_TOP_LEVEL_CTA_LIMIT} menu items.`);
    }

    const res = {
      locale,
      call_to_actions
    };

    if (composer_input_disabled) {
      res.composer_input_disabled = composer_input_disabled;
    }

    return res;
  }
}

exports.default = PersistentMenu;