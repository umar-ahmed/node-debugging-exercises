const add = require('.')

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds -1 + 1 to equal 0', () => {
    expect(add(-1, 1)).toBe(0);
});

test('throws error when adds 1 + \'2\'', () => {
    expect(() => {
        add(1, '2')
    }).toThrow(new Error('Cannot call add with string'));
});

test('adds multiple numbers', () => {
    expect(add(3, 4, 5, 2)).toBe(14);
});
