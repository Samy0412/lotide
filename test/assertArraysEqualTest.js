const assertArraysEqual = require("../assertArraysEqual");
//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); //Pass
assertArraysEqual([1, 2, 3], [3, 2, 1]); //Fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //Pass
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); //Fail
