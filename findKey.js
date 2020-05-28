// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  const pass = String.fromCodePoint(0x2705);
  const fail = String.fromCodePoint(0x274c);
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

const findKey = function (object, callback) {
  //scan the object keys
  for (const key of Object.keys(object)) {
    //check if the callback returns a truthy value
    if (callback(object[key])) {
      //return the key
      return key;
    }
  }
};

//TEST CODE

const test = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

assertEqual(
  findKey(test, (x) => x.stars === 2),
  "noma"
);
assertEqual(
  findKey(test, (x) => x.stars === 5),
  undefined
);
const test2 = {
  "Blue Hill": 2,
  Akaleri: 3,
  noma: 4,
  elBulli: 5,
  Ora: 5,
  Akelarre: 6,
};
assertEqual(
  findKey(test2, (x) => x === 3),
  "Akaleri"
);
assertEqual(
  findKey(test2, (x) => x > 6),
  undefined
);
