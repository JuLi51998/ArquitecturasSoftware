modulo = require("./main.js");

test('modulo entre 10 y 11 es 10', () => {
  expect(modulo(10, 11)).toBe(10);
});

test('modulo entre -10 y 11 es -10', () => {
  expect(modulo(-10, 11)).toBe(-10);
});

test('modulo entre 10 y 0 es Infinity', () => {
  expect(modulo(10, 0)).toBe(Infinity);
});
