'use strict';

// Define generator function for the fibonacci sequence
function *fibgen(maxValue = Infinity) {
  // Seed in the starting values
  let values = [0, 1];

  // Loop while the latest value is less than defined maximum value
  while(values[1] <= maxValue) {
    // Yield the latest number
    yield values[1];
    // Calculate next sequence number
    values.push(values[0] + values[1]);
    // Shift out the oldest value
    values.shift();
  }
};

module.exports = fibgen;
