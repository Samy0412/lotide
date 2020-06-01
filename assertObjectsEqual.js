const eqObjects = require("./eqObjects");

const assertObjectsEqual = function(object1, object2) {
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

module.exports = assertObjectsEqual;
