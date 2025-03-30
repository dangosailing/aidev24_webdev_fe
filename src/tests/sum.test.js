// Made this to demonstrate a simple test function from the jest docs. This is not intended to be implemented in the dev branch!

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});