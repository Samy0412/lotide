const without = function(source, itemsToRemove) {
  const result = [];
  source.forEach(function(i) {
    if (!itemsToRemove.includes(i)) {
      result.push(i);
    }
  });
  return result;
};

module.exports = without;
