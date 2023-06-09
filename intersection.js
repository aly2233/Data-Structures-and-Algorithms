

const intersection = (a, b) => {
    const result = [];
    const setA = new Set(a);
    for (let item of b) {
      if (setA.has(item)) {
        result.push(item);
      }
    }
    return result;
  };
  module.exports = {
    intersection,
  };
  