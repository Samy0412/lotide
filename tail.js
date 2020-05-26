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
  }
  if (actual !== expected) {
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

const tail = function (array) {
  let tail = [];
  for (let i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
};

//Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
