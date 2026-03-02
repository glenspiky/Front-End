// const p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if ((a = 2)) {
//     resolve("succes");
//   } else {
//     reject("Failed");
//   }
// });
// p.then((messege) => {
//   console.log("This is in the then " + messege);
// }).catch((messege) => {
//   console.error("This is in the catch " + messege);
// });

const userLeft = false;
const userWaitingCatMeme = true;
function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "user left",
      messege: ":(",
    });
  } else if (userWaitingCatMeme) {
    errorCallback({
      name: "user watching cat meme",
      messege: "Tutorial < cat",
    });
  } else {
    callback("Subscribe");
  }
}
watchTutorialCallback(
  (messege) => {
    console.log("Succes: " + messege);
  },
  (error) => {
    console.log(error.name + "" + error.messege);
  },
);

function watchTutorialCallbackPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "user left",
        messege: ":(",
      });
    } else if (userWaitingCatMeme) {
      reject({
        name: "user watching cat meme",
        messege: "Tutorial < cat",
      });
    } else {
      resolve("Subscribe");
    }
  });
}
watchTutorialCallbackPromise()
  .then((messege) => {
    console.log("Succes: " + messege);
  })
  .catch((error) => {
    console.log(error.name + "" + error.messege);
  });

//executing all promises at once
const recordVideo1 = new Promise((resolve, reject) => {
  resolve("Video 1 recorded");
});
const recordVideo2 = new Promise((resolve, reject) => {
  resolve("Video 2 recorded");
});
const recordVideo3 = new Promise((resolve, reject) => {
  resolve("Video 3 recorded");
});
// Promise.all([recordVideo1, recordVideo2, recordVideo3]).then((messeges) => {
//     console.log(messeges);
// });
//executing promises after one has finish
Promise.race([recordVideo1, recordVideo2, recordVideo3]).then((messege) => {
  console.log(messege);
});
