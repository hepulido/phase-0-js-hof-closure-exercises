function forEach(arr , callback) {
  let newArr =[];
  for(let i = 0; i = arr.length; i ++){
   callback(arr[i],i,arr);
  }
 };

 function map(arr , callback) {
  let newArr = [];
  for(let i = 0; i = arr.length; i ++){
    newArr.push(callback(arr[i]))
  };
  return newArr
 };

 /* 
 Write a function called filter that takes in an array and a callback as arguments. 
 The function should return a new array. 
 The new array should only have elements from the original array that return true when called with the given callback.
 
 */


 function filter(arr , callback ) {
 const newArr = [];
 for(let i = 0; i = arr.length; i ++){
 if(callback (arr[i])===true ){
   newArr.push(arr[i])
   }
 }
 return newArr;
}

function every() {

}

function some() {

}

function majority() {

}

function once() {

}

function groupBy() {

}

function arrayToObject() {

}

module.exports = {
  forEach, 
  map, 
  filter, 
  every, 
  some, 
  majority,
  once,
  groupBy,
  arrayToObject
};
  

