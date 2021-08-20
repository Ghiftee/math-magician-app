const calculate = require('../logic/calculate').default;

describe('calculate', () => {
  test('should clear all values when AC is pressed', () => {
    const result = calculate({
      operation: '+',
      next: '20',
      total: '200',
    }, 'AC');
    expect(result).toStrictEqual({
      operation: null,
      next: null,
      total: null,
    });
  });

  test('zero button should return an object', () => {
    const result = calculate({
      operation: '+',
      next: '0',
      total: null,
    }, '0');
    expect(result).toStrictEqual({});
  });

  test('should append a number when a button is clicked', () => {
    const result = calculate({
      operation: '+',
      next: '20023',
      total: null,
    }, '2');
    expect(result).toStrictEqual({
      next: '200232',
    });
  });

  test('should return a null total when no operation is passed', () => {
    const result = calculate({
      operation: '',
      next: '20023',
      total: null,
    }, '2');
    expect(result).toStrictEqual({
      next: '200232',
      total: null,
    });
  });

  test('should return an empty object when a number already has a decimal point', () => {
    const result = calculate({
      operation: '',
      next: '200.23',
      total: null,
    }, '.');
    expect(result).toStrictEqual({});
  });

  test('should return the correct value when the equals button is clicked', () => {
    const result = calculate({
      operation: '+',
      next: '200',
      total: 300,
    }, '=');
    expect(result).toStrictEqual({
      total: '500',
      operation: null,
      next: null,
    });
  });

  test('should change the sign when the +/- sign is clicked', () => {
    const result = calculate({
      operation: null,
      next: '200',
      total: null,
    }, '+/-');
    expect(result).toStrictEqual({
      next: '-200',
    });
  });
});
