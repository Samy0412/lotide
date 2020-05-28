const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (array1, array2) {
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

const takeUntil = function (array, callback) {
  const results = [];
  for (let item of array) {
    //It should keep going until the callback/predicate returns a truthy value.
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  //The function will return a "slice of the array with elements taken from the beginning."
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];

assertArraysEqual(
  takeUntil(data1, (x) => x < 0),
  [1, 2, 5, 7, 2]
);
assertArraysEqual(
  takeUntil(data2, (x) => x === ","),
  ["I've", "been", "to", "Hollywood"]
);
