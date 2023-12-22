function cesarCipher(word) {
  const punctuationRegEx = /[^\w\s]+/g;

  if (typeof word !== "string") throw new Error("Not a String, please enter a String type value!");
  else {
    const cipher = word.split("");
    const cipherArray = [];
    const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

    const findLetterIndex = cipher.map((letter) => alphabet.indexOf(letter));

    for (let i = 0; i < cipher.length; i++) {
      if (cipher[i] !== " " && !punctuationRegEx.test(cipher[i])) {
        if (findLetterIndex[i] - 3 < 0) cipherArray.push(alphabet[findLetterIndex[i] - 3 + alphabet.length]);
        else cipherArray.push(alphabet[findLetterIndex[i] - 3]);
      } else cipherArray.push(cipher[i]);
    }

    const cipherToString = cipherArray.join("");
    return cipherToString;
  }
}

module.exports = cesarCipher;
