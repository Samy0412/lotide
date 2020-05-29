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

const letterPositions = function (sentence) {
  const results = {};
  //loop through each letter of the sentence
  for (let i = 0; i < sentence.length; i++) {
    //if ' ', ignore it
    if (sentence[i] !== " ") {
      //if letter is not in the array, add it as a key and add its index (in a array) as its value
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        //if letter is in the array, push its index in the appropriate key
        results[sentence[i]].push(i);
      }
    }
  }

  return results;
};

//TEST CODE
let result = letterPositions("hello");
console.log(result);
assertArraysEqual(result.h, [0]);
assertArraysEqual(result.e, [1]);
assertArraysEqual(result.l, [2, 3]);
assertArraysEqual(result.o, [4]);
