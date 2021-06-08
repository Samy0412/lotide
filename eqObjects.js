const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //check if both objects have the same amount of keys
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //loop through the keys of object 1
  for (const key of Object.keys(object1)) {
    //check if it is an array or not
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // check if value of each keys are equal
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      //check if it is an object
    }else if(Object.prototype.toString.call(object1[key]) === '[object Object]'&& Object.prototype.toString.call(object2[key]) === '[object Object]'){
      if(!eqObjects(object1[key],object2[key])) return false;

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
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

console.log(eqArrays(cd.d, dc.d));

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false)

assertEqual(eqObjects({ a: { y: {j: 6, k: 8}, z: 1 }, b: 2 }, { a: { y: { k: 8, j: 6 }, z: 1 }, b: 2 }), true)

assertEqual(eqObjects({ a: { y: {j: 6, k: 8}, z: 1 }, b: 2 }, { a: { y: {j: 6, k: 8}, z: {f:1} }, b: 2 }), false)
module.exports = eqObjects;
