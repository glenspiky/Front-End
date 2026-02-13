console.log(Array.prototype); //is the blueprint for all arrays in JS.
Array.prototype.myApp = function (doubled) {
  //By adding myMap here, every array can now call myMap.
  //callback is the function you pass that tells myMap what to do with each
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(doubled(this[i], i, this)); // callback(element, index, array)
    //this refers to the array you called myMap on.
    //This loop goes through every element of that array.
  }

  return result;
};
//console.log(Array.prototype.myApp());

const arr = [2, 2, 3];
const doubled = arr.myApp((x) => x * 2);
console.log(doubled);
//arr.myMap(x => x * 2) → calls our myMap function.
//callback is x => x * 2.
