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

const countLetters = function (string) {
  const instances = {};

  //loop through the entire allItem list
  for (let letter of string) {
    //console.log(item);
    if (letter !== " ") {
      if (instances[letter]) {
        instances[letter] += 1;
      } else {
        instances[letter] = 1;
      }
    }
  }

  return instances;
};

//TEST CODE
result = countLetters("lighthouse in the house");
console.log(result);
assertEqual(result["o"], 2);
assertEqual(result["g"], 1);
assertEqual(result["i"], 2);
