Array.prototype.myFilter = function (callback) {
  const result = []; // Step 1
  for (let i = 0; i < this.length; i++) {
    // Step 2
    if (callback(this[i], i, this)) {
      // Step 3
      result.push(this[i]); // Step 4
    }
  }
  return result; // Step 5
};

const arr = [1, 2, 3, 4];
const evens = arr.myFilter((x) => x % 2 === 0);
console.log(evens); // [2, 4]

//step 1
// We create a new empty array.
// filter always returns a new array, it never changes the original array.
// This array will store all elements that pass the test.

//step 2
//  for (let i = 0; i < this.length; i++)
// this refers to the array we called myFilter on.
// For example, if you call [1,2,3,4].myFilter(...), then this is [1,2,3,4].
// The loop goes through every element in the array one by one.

//step 3
// if (callback(this[i], i, this))
// this[i] → the current element.
// i → the current index.
// this → the whole array.
// callback(...) is the test function you pass when calling myFilter.

// Step 4
// result.push(this[i])
// If the callback returned true, we add the element to result.
// If false → we skip it.
