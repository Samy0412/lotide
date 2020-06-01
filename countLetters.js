const assertEqual = require("./assertEqual");

const countLetters = function (string) {
  const instances = {};

  //loop through the entire allItem list
  for (let letter of string) {
    //console.log(item);
    if (letter !== " ") {
      if (instances[letter]) {
        instances[letter] += 1;
      } else {
        instances[letter] = 1;
      }
    }
  }

  return instances;
};

//TEST CODE
let result = countLetters("lighthouse in the house");
console.log(result);
assertEqual(result["o"], 2);
assertEqual(result["g"], 1);
assertEqual(result["i"], 2);

module.exports = countLetters;
