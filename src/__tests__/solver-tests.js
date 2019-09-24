let solver;

describe('Solver', () => {
  beforeEach(() => {
    jest.resetModules();
    solver = require('../solver');
  });

  it('Defines solver function', () => {
    expect(solver).not.toBeUndefined();
  });

  it('Returns expected even value sums', () => {
    // No even numbers found
    expect(solver(1)).toStrictEqual(0);
    // First even number found
    expect(solver(2)).toStrictEqual(2);
    // First even number passed, exits before second even number
    expect(solver(2)).toStrictEqual(2);
    // Even numbers: 2, 8
    expect(solver(8)).toStrictEqual(10);
    // Even numbers: 2, 8, 34
    expect(solver(55)).toStrictEqual(44);
    // Even numbers: 2, 8, 34
  });
});
