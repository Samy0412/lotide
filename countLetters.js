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
  for (let i = 0; i < string.length; i++) {
    //console.log(item);
    if (instances[string[i]]) {
      instances[string[i]] += 1;
    } else {
      instances[string[i]] = 1;
    }
  }

  return instances;
};

//TEST CODE
result = countLetters("papagateau");
console.log(result);
assertEqual(result["a"], 4);
assertEqual(result["p"], 2);
assertEqual(result["g"], 1);
