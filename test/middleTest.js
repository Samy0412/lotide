const _ = require("../index");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns [] for [1,2]", () => {
    const result = _.middle([1, 2]);
    assert.deepEqual(result, []);
  });
  it("return [] for [1]", () => {
    const words = _.middle([1]);
    assert.deepEqual(words, []);
  });
  it("return [2] for [1,2,3]", () => {
    const words = _.middle([1, 2, 3]);
    assert.deepEqual(words, [2]);
  });
  it("return [4] for [1,2,3,4,5,6,7]", () => {
    const words = _.middle([1, 2, 3, 4, 5, 6, 7]);
    assert.deepEqual(words, [4]);
  });
  it("return [5,6] for [1,2,3,4,5,6,7,8,9,10]", () => {
    const words = _.middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual(words, [5, 6]);
  });
});
