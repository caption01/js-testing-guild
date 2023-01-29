import { it, expect } from 'vitest';

import { transformToNumber } from './numbers';

it('should transform a string number to a number type', () => {
  const input = '1';

  const result = transformToNumber(input);

  expect(result).toBeTypeOf('number');
});

it('should return NaN if invalid string number provided', () => {
  const input = 'hello';
  const result = transformToNumber(input);

  expect(result).toBeNaN;
});
