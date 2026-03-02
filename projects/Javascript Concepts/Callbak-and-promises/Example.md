window.onload = function () {
  function callback(val) {
    // console.log(val);
  }
  let fruits = ["banana", "apple", "pear"];
  fruits.forEach(function (val) {
    //calback
    // console.log(val);
  });
  fruits.forEach(callback);
  // console.log("done");
};
//Async js

const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something
    //resolve("Some data")
    reject("some error");
  });
};
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
//   ,
//   (err) => {
//   console.log(err);

// }
