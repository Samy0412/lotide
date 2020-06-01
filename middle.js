//Implement middle which will take in an array and return the middle-most element(s) of the given array.
//The middle function should return an array with only the middle element(s) of the provided array.
const middle = function(array) {
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

module.exports = middle;
