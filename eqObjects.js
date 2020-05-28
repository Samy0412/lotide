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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //check if both objects have the same amount of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //loop through the keys of object 1
  for (const key of Object.keys(object1)) {
    //check if it is an array or not
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // check if value of each keys are equal
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//TEST CODE

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true);
//console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

//console.log(eqObjects(ab, abc))

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

//console.log(eqArrays(cd.d, dc.d));
