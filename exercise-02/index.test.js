const add = require('.')

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 1 + \'2\' to equal 3', () => {
    expect(add(1, '2')).toBe(3);
});

test('adds 0.1 + 0.2 to equal 3', () => {
    expect(add(0.1, 0.2)).toBe(0.3);
});
