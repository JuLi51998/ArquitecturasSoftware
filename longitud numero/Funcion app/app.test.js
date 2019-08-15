const contadorDigitos = require('./app');

test('Si agregamos 123 la salida es 3', () => {
  expect(contadorDigitos(112)).toBe(3);
});