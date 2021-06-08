const assertArraysEqual = require("./assertArraysEqual");

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

//TEST CODE

assertArraysEqual([1,2,3,4,5,6],flatten([1, 2, [3, 4], 5, [6]]));


module.exports = flatten;
