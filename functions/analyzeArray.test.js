const analyzeArray = require("./analyzeArray");

const object = [1, 8, 3, 4, 2, 6];
test("Min number in the array", () => {
  expect(analyzeArray(object)).toMatchObject({ min: 1 });
});

test("Max number in the array", () => {
  expect(analyzeArray(object)).toMatchObject({ max: 8 });
});

test("Average number in the array", () => {
  expect(analyzeArray(object)).toMatchObject({ average: 4 });
});
test("Array length", () => {
  expect(analyzeArray(object)).toHaveLength(6);
});
