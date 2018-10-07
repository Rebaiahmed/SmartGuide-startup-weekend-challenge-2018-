'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Adjustment {
  constructor({ name = '', amount = '' }) {
    this.name = name;
    this.amount = amount;

    return {
      name: this.name,
      amount: this.amount
    };
  }
}

exports.default = Adjustment;