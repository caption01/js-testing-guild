import { it, expect, vi } from 'vitest';

import { sendDataRequest } from './http';
import { HttpError } from './errors';

const testResponseData = { testKey: 'testData' };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not a string');
    }

    const testResponse = {
      ok: true,
      json: () =>
        new Promise((resolve, reject) => {
          return resolve(testResponseData);
        }),
    };

    resolve(testResponse);
  });
});

// to replace global module in environment
vi.stubGlobal('fetch', testFetch);

it('should return ana available response data', () => {
  const testData = { key: 'test' };

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should convert the provided data to JSON before sending the request', async () => {
  const testData = { key: 'test' };

  let errorMessage;

  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe('Not a string');
});

it('should throw a HttpError in case of non-ok response', () => {
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const testResponse = {
        ok: false,
        json: () =>
          new Promise((resolve, reject) => {
            return resolve(testResponseData);
          }),
      };

      resolve(testResponse);
    });
  });

  const testData = { key: 'test' };

  return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
