const reverseString = require("./reverseString");

test("Reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
