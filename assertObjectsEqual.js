const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = function (object1, object2) {
  const pass = String.fromCodePoint(0x2705);
  const fail = String.fromCodePoint(0x274c);
  const inspect = require("util").inspect;

  const value = eqObjects(object1, object2);
  if (value === true) {
    console.log(
      pass +
        pass +
        pass +
        `Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`
    );
  } else {
    console.log(
      fail +
        fail +
        fail +
        `Assertion Failed:${inspect(object1)} !== ${inspect(object2)}`
    );
  }
};

assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2", c: "3" });
assertObjectsEqual({ a: "1", b: "2", c: "4" }, { a: "1", b: "2", c: "3" });
