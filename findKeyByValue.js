const assertEqual = require("./assertEqual");

const findKeyByValue = function (object, value) {
  let result;
  //loop through object keys
  for (const key of Object.keys(object)) {
    //if object keys.value = value, assign value key to result
    if (object[key] === value) {
      result = key;
    }
  }
  return result;
};

//TEST CODE

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
