import fs from 'fs';
import path from 'path';

import { it, expect, vi, beforeEach } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document);

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent);
});

it('should add an error paragraph to the id="errors" element', () => {
  const testError = 'Test';

  showError(testError);

  const errorsEl = document.getElementById('errors');
  const errorParagrapth = errorsEl.firstElementChild;

  expect(errorParagrapth).not.toBeNull();
});

it('should not contain an error paragraph initially', () => {
  const errorsEl = document.getElementById('errors');
  const errorParagrapth = errorsEl.firstElementChild;

  expect(errorParagrapth).toBeNull();
});
