function analyzeArray(object) {
  object = {
    average: object.reduce((accumulator, currentValue) => accumulator + currentValue) / object.length,
    min: Math.min(...object),
    max: Math.max(...object),
    length: object.length,
  };

  return object;
}

module.exports = analyzeArray;
