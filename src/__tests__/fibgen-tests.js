let fibgen;
let fibVals = [1,1,2,3,5,8,13,21,34,55];

describe('Fibgen', () => {
  beforeEach(() => {
    jest.resetModules();
    fibgen = require('../fibgen');
  });

  it('Defines generator function', () => {
    expect(fibgen).not.toBeUndefined();
  });

  it('Generates 1', () => {
    const generator = fibgen();
    let value = generator.next();
    expect(value.value).toStrictEqual(1);
  });

  it('Returns expected sequence', () => {
    const generator = fibgen();
    let generatedValues = [];

    for(let value of generator) {
      generatedValues.push(value);
      if(value === 55) {
        break;
      }
    }

    expect(generatedValues).toStrictEqual(fibVals);
  });

  it('Auto stops when provided optional maxValue option', () => {
    const maxValue = 55;
    const generator = fibgen(maxValue);
    let generatedValues = [];

    for(let value of generator) {
      generatedValues.push(value);
    }

    expect(generatedValues).toStrictEqual(fibVals);
  });
});
