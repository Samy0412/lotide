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

const words = ["ground", "control", "to", "major", "tom"];

//MAP FUNCTION

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);

console.log(results1);

//TEST CODE

assertArraysEqual(
  map(words, (word) => word + "0"),
  ["ground0", "control0", "to0", "major0", "tom0"]
);
assertArraysEqual(
  map(words, (word) => word[4]),
  ["n", "r", undefined, "r", undefined]
);
assertArraysEqual(
  map(words, (word) => word.includes("t")),
  [false, true, true, false, true]
);
assertArraysEqual(
  map(words, (word) => word.toUpperCase()),
  ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]
);
