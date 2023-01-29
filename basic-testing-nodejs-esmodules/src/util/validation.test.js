import { it, describe, expect } from 'vitest';

import { validateNumber, validateStringNotEmpty } from './validation';

describe('on validateStringNotEmpty function', () => {
  it('should throw must not be empty error message if empty string value provided', () => {
    const resultFn = () => {
      validateStringNotEmpty('');
    };
    expect(resultFn).toThrow(/must not be empty/);
  });

  it('should not throw an error message if string value provided', () => {
    const inputs = 'hello';

    const resultFn = () => {
      validateStringNotEmpty(inputs);
    };

    expect(resultFn).not.toThrow(/must not be empty/);
  });
});

describe('on validateNumber function', () => {
  it('should throw error message "Invalid number input" if input is not number', () => {
    const input = 'string';

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).toThrow(/Invalid number input/);
  });

  it('should not throw error if input is number', () => {
    const input = 10;

    const resultFn = () => {
      validateNumber(input);
    };

    expect(resultFn).not.toThrow();
  });
});
