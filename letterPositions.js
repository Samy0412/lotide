const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = letterPositions;
