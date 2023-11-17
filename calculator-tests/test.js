const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('add should return the sum of numbers', () => {
    expect(calculator.add(1, 2, 3)).toBe(6);
    expect(calculator.add(5, 10)).toBe(15);
    expect(calculator.add(-1, -1, -1, -1)).toBe(-4);
    expect(calculator.add(0)).toBe(0);
    expect(calculator.add()).toBe(0); 
  });

  test('multiply should return the product of numbers', () => {
    expect(calculator.multiply(2, 3, 4)).toBe(24);
    expect(calculator.multiply(5, 0)).toBe(0);
    expect(calculator.multiply(2, -2, 2)).toBe(-8);
    expect(calculator.multiply()).toBe(1);
  });

  test('subtraction should return the difference between two numbers', () => {
    expect(calculator.subtraction(10, 5)).toBe(5);
    expect(calculator.subtraction(5, 10)).toBe(-5);
    expect(calculator.subtraction(5, 5)).toBe(0);
  });

  test('divide should return the quotient of two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(8, 0)).toBe(Infinity); 
    expect(calculator.divide(0, 8)).toBe(0); 
  });

  test('exponentiation should return the square of a number', () => {
    expect(calculator.exponentiation(4)).toBe(16);
    expect(calculator.exponentiation(0)).toBe(0);
    expect(calculator.exponentiation(-3)).toBe(9);
    expect(calculator.exponentiation('hello')).toBe(NaN);
    expect(calculator.exponentiation([1, 2, 3])).toBe(NaN);
  });

  test('methods should return NaN when non-numeric arguments are passed', () => {
    expect(calculator.add('hello', 'world')).toBe(NaN);
    expect(calculator.multiply('test', 5)).toBe(NaN);
    expect(calculator.subtraction(true, false)).toBe(NaN);
    expect(calculator.divide('100', 10)).toBe(NaN);
    expect(calculator.exponentiation(false)).toBe(NaN);
  });

  test('divide should return Infinity when dividing by zero', () => {
    expect(calculator.divide(10, 0)).toBe(Infinity);
  });
});
