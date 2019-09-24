const solver = require('./src/solver')

// Set max value to four million as specified in prompt
const maxValue = 4000000;
// Run the solver function
let sum = solver(maxValue);

console.log(
  `The sum of the even-valued terms in the Fibonacci sequence ` +
  `whose values do not exceed ${maxValue} is ${sum}`
);
