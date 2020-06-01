const assertEqual = require("./assertEqual");

//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

const countOnly = function (allItems, itemsToCount) {
  //initialize new object to return
  const instances = {};

  //loop through the entire allItem list
  for (const item of allItems) {
    //   //console.log(item);

    if (itemsToCount[item]) {
      if (instances[item]) {
        instances[item] += 1;
      } else {
        instances[item] = 1;
      }
    }
  }

  return instances;
};

//TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];
//console.log(countOnly(firstNames, {}));
const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);

module.exports = countOnly;
