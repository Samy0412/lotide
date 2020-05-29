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

const assertArraysEqual = function (array1, array2) {
  const pass = String.fromCodePoint(0x2705);
  const fail = String.fromCodePoint(0x274c);

  const value = eqArrays(array1, array2);
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

//Implement middle which will take in an array and return the middle-most element(s) of the given array.
//The middle function should return an array with only the middle element(s) of the provided array.
const middle = function (array) {
  let arrayMiddle = [];
  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (array.length <= 2) {
    return arrayMiddle;
  }

  //For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (array.length % 2 !== 0) {
    arrayMiddle.push(array[(array.length - 1) / 2]);
  }
  //For arrays with an even number of elements, an array containing the two elements in the middle should be returned
  if (array.length % 2 === 0) {
    arrayMiddle.push(array[(array.length - 2) / 2]);
    arrayMiddle.push(array[(array.length - 2) / 2 + 1]);
  }
  return arrayMiddle;
};

//TEST CODE
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]);
