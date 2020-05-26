const pass = String.fromCodePoint(0x2705);
const fail = String.fromCodePoint(0x274c);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    if (typeof actual === "string") {
      console.log(
        pass + pass + pass + `Assertion Passed: '${actual}' === '${expected}'`
      );
    } else {
      console.log(
        pass + pass + pass + `Assertion Passed: ${actual} === ${expected}`
      );
    }
  } else if (actual !== expected) {
    if (typeof actual === "string") {
      console.log(
        fail + fail + fail + `Assertion Failed: '${actual}' !== '${expected}' `
      );
    } else {
      console.log(
        fail + fail + fail + `Assertion Failed: ${actual} !== ${expected}`
      );
    }
  }
};

const head = function (array) {
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
