const add = require("./stringCalculator.js")

test('empty string should result in 0', () => {
    expect(add("")).toBe(0)
})

test('single number should result in the number itself', () => {
    expect(add("1")).toBe(1)
})

test('two comma-separated numbers should be added', () => {
    expect(add("1,2")).toBe(3)
})

test('multiple comma-separated numbers should be added', () => {
    expect(add("1,2,3")).toBe(6)
})

test('comma and newline as delimiters should be handled correctly', () => {
    expect(add("1\n2,3")).toBe(6)
})

test('custom delimiter should be supported', () => {
    expect(add("//;\n1;2;3")).toBe(6);
})

test('negative number should throw an exception', () => {
    expect(() => add('1,-2')).toThrow("negative numbers not allowed as -2");
})

test('multiple negative numbers should throw an exception', () => {
    expect(() => add('1,-2,-3')).toThrow("negative numbers not allowed as -2");
})

test('numbers greater than 1000 should be ignored', () => {
    expect(add('2,1001')).toBe(2);
    expect(add('1000,1')).toBe(1001);
});

test('handles custom delimiter of any length enclosed in brackets', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});

test('handles multiple custom delimiters like [*] and [%]', () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6);
});