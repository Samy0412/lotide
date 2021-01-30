const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};



const assertArraysEqual = function(array1, array2) {
  const pass = String.fromCodePoint(0x2705);
  const fail = String.fromCodePoint(0x274c);
  const inspect = require("util").inspect;

  const value = eqArrays(array1, array2);
  if (value === true) {
    console.log(
      pass +
        pass +
        pass +
        `Assertion Passed: ${inspect(array1)} === ${inspect(array2)}`
    );
  } else {
    console.log(
      fail +
        fail +
        fail +
        `Assertion Failed:${inspect(array1)} !== ${inspect(array2)}`
    );
  }
};

const flatten = (array)=>{
  let newArray=[];
 for (i=0; i<array.length; i++){
   if (Array.isArray(array[i])){
     for(j=0;j<array[i].length; j++){
      newArray.push(array[i][j]);
     }
   }else{
     newArray.push(array[i])
   }
 }
 return newArray;
}


assertArraysEqual([1,2,3,4,5,6],flatten([1, 2, [3, 4], 5, [6]]));
