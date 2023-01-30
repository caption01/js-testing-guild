import { describe, it, expect, beforeEach } from 'vitest';

import { extractPostData } from './posts';

describe('extractPostData ()', () => {
  let testTitle = 'test title';
  let testContent = 'test content';
  let testFormData;

  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };
  });

  it('should extract title and content from the provided form data', () => {
    const result = extractPostData(testFormData);

    expect(result.title).toBe(testTitle);
    expect(result.content).toBe(testContent);
  });
});
