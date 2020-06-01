const tail = function(array) {
  let tail = [];
  for (let i = 1; i < array.length; i++) {
    tail.push(array[i]);
  }
  return tail;
};
module.exports = tail;
