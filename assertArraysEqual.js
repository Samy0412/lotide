const assertArraysEqual = function (array1, array2) {
  const pass = String.fromCodePoint(0x2705);
  const fail = String.fromCodePoint(0x274c);
  let value = false;
  if (array1.length !== array2.length) {
    value = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      value = true;
    } else {
      value = false;
    }
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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
