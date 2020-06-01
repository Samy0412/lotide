const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
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
