const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('App', () => {
  it('exists', () => {
    assert(fs.existsSync(path.resolve(__dirname, './src/App.js')));
  });

  it('can be read without throwing an error', () => {
    assert.doesNotThrow(() => fs.readFileSync(path.resolve(__dirname, './src/App.js'), 'utf8'));
  });
});