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