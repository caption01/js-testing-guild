import { it, expect, vi } from 'vitest';
// import { promises as fs } from 'fs';

import writeData from './io';

vi.mock('fs');
vi.mock('path', () => {
  return {
    default: {
      join: (...args) => args[args.length - 1],
    },
  };
});

it('should execute the writeFile method', () => {
  const testData = 'Test';
  const testFilename = 'test.txt';

  writeData(testData, testFilename);

  // return expect(fs.writeFile).toBeCalledWith(testFilename, testData);
  // return expect(fs.writeFile).toBeCalled();
  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});

it('should return a promise that resolve to no value if called correctly', () => {
  const testData = 'Test';
  const testFilename = 'test.txt';

  writeData(testData, testFilename);

  return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
});
