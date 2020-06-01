const assertArraysEqual = require("./assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];

//MAP FUNCTION

const map = function(array, callback) {
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
