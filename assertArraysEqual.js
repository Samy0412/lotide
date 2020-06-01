const eqArrays = require("./eqArrays");

const assertArraysEqual = function(array1, array2) {
  const pass = String.fromCodePoint(0x2705);
  const fail = String.fromCodePoint(0x274c);
  const inspect = require("util").inspect;

  const value = eqArrays(array1, array2);
  if (value === true) {
    console.log(
      pass +
        pass +
        pass +
        `Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`
    );
  } else {
    console.log(
      fail +
        fail +
        fail +
        `Assertion Failed:${inspect(array1)} !== ${inspect(array2)}`
    );
  }
};

//TEST CODE
/*assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);*/

module.exports = assertArraysEqual;
