const calculator = require("./calculator");

test("Add two numbers", () => {
  expect(calculator.add(2, 2)).toEqual(4);
});

test("Subtract two numbers", () => {
  expect(calculator.subtract(5, 3)).toEqual(2);
});

test("Divide two numbers", () => {
  expect(calculator.divide(10, 2)).toEqual(5);
});

test("Multiply two numbers", () => {
  expect(calculator.multiply(3, 2)).toEqual(6);
});
