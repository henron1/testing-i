const math = require('./math');
// SUT: System under test
// teset suite > test cases > assertions > matchers
// a test case

test('adds two numbers', () => {
    expect(math.add(2,2)).toBe(4);
    expect(math.add(1,3)).toBe(4);
    expect(math.add(-1, 3)).toBe(2);
})