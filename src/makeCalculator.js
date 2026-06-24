'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,

    operate(call, val) {
      call(val);

      const result = calculator.result;

      calculator.result = result;

      return { operate: calculator.operate, reset: calculator.reset };
    },

    add(value) {
      calculator.result += value;
    },

    subtract(value) {
      calculator.result -= value;
    },

    multiply(value) {
      calculator.result *= value;
    },

    divide(value) {
      calculator.result /= value;
    },

    reset(value) {
      calculator.result = 0;

      return { operate: calculator.operate, reset: calculator.reset };
    },
  };

  return calculator;
}
module.exports = makeCalculator;
