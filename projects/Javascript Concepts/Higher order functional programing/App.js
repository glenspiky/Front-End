const radius = [3, 1, 2, 4];
/*
const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
    return output
};
*/
//console.log(calculateArea(radius));
/*
const calculateDiameter = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  return output;
};
*/
//console.log(calculateDiameter(radius));

//correct way (DRY) 
const area = function (radius) {
    return Math.PI * radius* radius
}
const diamater = function (radius) {
  return 2 * radius ;
};
Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
      output.push(logic(radius[i]));
    }
    // radius.map(i => {
    //     output.push(logic(radius[i]));
    // })
    return output;
}
console.log(radius.map(area));
console.log(radius.map(diamater));

