const suma = require('../app');

test('suma 2 + 3 = 5', () => {
    expect(suma(2,3)).toBe(5);
});