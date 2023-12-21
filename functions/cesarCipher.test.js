const cesarCipher = require("./cesarCipher");

test("Testing if letters in the sequence is transformed to Cesar Cipher", () => {
  expect(cesarCipher("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG")).toMatch(
    "QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD"
  );
});
