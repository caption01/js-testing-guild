import { it, expect } from 'vitest';

import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];
  const expected = 6;

  // Act
  const result = add(numbers);

  // Assert
  expect(result).toBe(expected);
});

it('should yield NaN if a least one invalid number is provided', () => {
  const input = ['invalid', 1, 2];

  const result = add(input);

  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values in provided', () => {
  const input = ['1', '2', '3'];
  const expected = 6;

  const result = add(input);

  expect(result).toBe(expected);
});

it('should yield 0 if an empty array is provided', () => {
  const number = [];
  const expected = 0;

  const result = add(number);

  expect(result).toBe(expected);
});

it('should throw error if no value is passed into the function', () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow();
});

it('shuold throw error if provided with multiple arguments instead of an array', () => {
  const num1 = 1;
  const num2 = 5;

  const resultFn = () => {
    add(num1, num2);
  };

  expect(resultFn).toThrow(/is not iterable/);
});
