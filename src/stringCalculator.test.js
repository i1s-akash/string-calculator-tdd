const add = require("./stringCalculator.js")

test('empty string should result in 0', () => {
    expect(add("")).toBe(0)
})