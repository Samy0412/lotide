const assertArraysEqual = require("../assertArraysEqual");
const without = require("../without");
//TEST CODE

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

let words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
//console.log(words);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
