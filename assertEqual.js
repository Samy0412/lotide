// FUNCTION IMPLEMENTATION
const mad = String.fromCodePoint(0x1f621);

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    if (typeof actual === "string") {
      console.log(`Assertion Passed: '${actual}' === '${expected}'`);
    } else {
      console.log(`Assertion Passed: ${actual} === ${expected}`);
    }
  } else if (actual !== expected) {
    if (typeof actual === "string") {
      console.log(mad + `Assertion Failed: '${actual}' !== '${expected}' `);
    } else {
      console.log(mad + `Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
