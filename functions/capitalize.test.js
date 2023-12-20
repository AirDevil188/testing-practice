const capitalize = require("./capitalize");

test("Check if the first letter of the input word is capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});
