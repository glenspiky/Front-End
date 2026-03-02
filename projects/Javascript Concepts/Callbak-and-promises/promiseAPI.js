//Promise.all() method takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved, or rejects if any of the promises in the array reject.
//whaen all the promises are resolved, it returns an array of the resolved values in the same order as the original promises.
//when one of the promises is rejected, it returns the reason for the rejection of the first promise that was rejected.This happens immediately, without waiting for the other promises to resolve or reject.
//promise.allsettle() method takes an array of promises and returns a single promise that resolves when all of the promises in the array have settled, meaning they have either resolved or rejected. It never rejects, even if some of the promises in the array reject. Instead, it returns an array of objects that describe the outcome of each promise, including whether it was fulfilled or rejected and the corresponding value or reason.
//promise.race() method takes an array of promises and returns a single promise that resolves or rejects as soon as one of the promises in the array resolves or rejects. The returned promise adopts the value or reason of the first promise that settles, whether it is fulfilled or rejected. This means that if any of the promises in the array resolve or reject, the returned promise will immediately resolve or reject with that value or reason, without waiting for the other promises to settle.
//promise.any() method takes an array of promises and returns a single promise that resolves as soon as any of the promises in the array resolves. If all of the promises in the array reject, then the returned promise rejects with an AggregateError, which is an error object that contains an array of all the rejection reasons from the promises in the input array. This means that if at least one promise in the array resolves, the returned promise will resolve with that value, and if all promises reject, it will reject with an AggregateError containing all rejection reasons.If the promise returned by promise.any() is rejected, the AggregateError object will have a property called "errors" that contains an array of all the rejection reasons from the promises in the input array. This allows you to access and handle each individual rejection reason if needed.

//Pronise.all()

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 succes"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 succes"), 1000);
//   //setTimeout(() => reject("P2 fail"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   //setTimeout(() => resolve("P3 succes"), 2000);
//   setTimeout(() => reject("P3 fail"), 2000);
// });
// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//promise.allSettled()

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 succes"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 succes"), 1000);
//   //setTimeout(() => reject("P2 fail"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   //setTimeout(() => resolve("P3 succes"), 2000);
//   setTimeout(() => reject("P3 fail"), 2000);
// });
// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//Promise.race()
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 succes"), 3000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P2 succes"), 1000);
//   //setTimeout(() => reject("P2 fail"), 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//   //setTimeout(() => resolve("P3 succes"), 2000);
//   setTimeout(() => reject("P3 fail"), 2000);
// });
// Promise.race([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//promises.any()
const p1 = new Promise((resolve, reject) => {
    //setTimeout(() => resolve("P1 succes"), 3000);
    setTimeout(() => reject("P1 fail"), 3000);
});
const p2 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("P2 succes"), 1000);
  setTimeout(() => reject("P2 fail"), 1000);
});
const p3 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve("P3 succes"), 2000);
  setTimeout(() => reject("P3 fail"), 2000);
});
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
      console.error(err);
      console.log(err.errors);
      
  });