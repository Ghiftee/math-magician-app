const operate = require('../logic/operate').default;

describe('operate', () => {
  test('should add two numbers', () => {
    const result = operate(2, 3, '+');
    expect(result).toBe('5');
  });

  test('should subtract two numbers', () => {
    const result = operate(5, 3, '-');
    expect(result).toBe('2');
  });

  test('should multiply two numbers', () => {
    const result = operate(2, 3, 'x');
    expect(result).toBe('6');
  });

  test('should divide two numbers', () => {
    const result = operate(20, 4, '÷');
    expect(result).toBe('5');
  });

  test('should find the modulo of two numbers', () => {
    const result = operate(20, 3, '%');
    expect(result).toBe('2');
  });
});
