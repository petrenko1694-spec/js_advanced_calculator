'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const obj = {
    result: 0,

    operate(call, val) {
      call(val);

      return { operate: obj.operate, reset: obj.reset };
    },

    add(value) {
      obj.result += value;
    },

    subtract(value) {
      obj.result -= value;
    },

    multiply(value) {
      obj.result *= value;
    },

    divide(value) {
      obj.result /= value;
    },

    reset(value) {
      obj.result = 0;

      return { operate: obj.operate, reset: obj.reset };
    },
  };

  return obj;
}
module.exports = makeCalculator;
