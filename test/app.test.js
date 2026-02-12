const {suma, mult} = require('../app');

test('suma 2 + 3 = 5', () => {
    expect(suma(2,3)).toBe(5);
});

test('mutl 5 * 4 = 20', () => {
    expect(mult(5,4)).toBe(20);
});
