const pass = String.fromCodePoint(0x2705);
const fail = String.fromCodePoint(0x274c);

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let value = false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      value = true;
    } else {
      value = false;
    }
  }
  return value;
};

const assertArraysEqual = function (array1, array2) {
  let value = false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      value = true;
    } else {
      value = false;
    }
  }
  if (array1.length !== array2.length) {
    value = false;
  }
  if (value === true) {
    console.log(
      pass + pass + pass + `Assertion Passed: ${array1} === ${array2}`
    );
  } else {
    console.log(
      fail + fail + fail + `Assertion Failed:${array1} !== ${array2}`
    );
  }
};

const without = function (source, itemsToRemove) {
  const result = [];
  source.forEach(function (i) {
    if (!itemsToRemove.includes(i)) {
      result.push(i);
    }
  });
  return result;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
