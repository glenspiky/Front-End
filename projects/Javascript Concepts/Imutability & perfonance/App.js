//spread operator
//-expands an array into separate elements

var meats = ["han", "salam", "bacon"];
//console.log(...meats);

var nums1 = [1, 2, 3];
var nums2 = [...nums1, 4, 5, 6];
//console.log(nums2);

var nums = [3, 6, 7];
function addNums(a, b, c) {
  console.log(a + b + c);
}
//addNums(...nums)

//Rest Parameter JavaScript
//-bundles parameters into an array

function openFridge(...foods) {
  console.log(foods);
}
function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hotdog";
const food3 = "sushi";
const food4 = "rice";

//openFridge(food2,food2,food3,food4)

const foods = getFood(food1, food2, food3, food4);
//console.log(foods)

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result +=number
  }
    return result
}
total = sum(1,2,3,4);
console.log(total);


const user = {
  name: "Glen",
  address: {
    city: "Nairobi"
  }
}

const newUser = { ...user }
newUser.address.city = "Mombasa"

console.log(user.address.city) // Why does this change?
