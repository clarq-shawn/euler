'use strict';

const fibgen = require('./fibgen');

// Define function to sum even values
function solver(maxValue) {
  let sum = 0;
  // Initialize fibonacci generator
  const generator = fibgen(maxValue);
  // Iterate through sequence
  for(let value of generator) {
    // If number is even, add it to the sum
    if(value % 2 === 0) {
      sum += value
    }
  }
  return sum;
};

module.exports = solver;
