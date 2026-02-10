/*function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to google");
    }
  });
}
function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra inormation + ${response}`);
  });
}

// makeRequest("Google")
//   .then((response) => {
//     console.log("response received");
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("response received");
    const processResponse = await processRequest(response);
    console.log(processResponse);
  } catch (err) {
    console.log();
  }
}
doWork();
*/

/*
const p = new Promise((resolve, reject) => {
  resolve("Promise resolved value");
});


//Async function always returns a promise
//Async and await are used to handle promises
//Await can only be used inside an async function
async function getData(params) {
  //If you return or dont return a promise, the function will automatically wrap the value inside a promise and it will return a promise
  return p
}
const dataPromise = getData()
//console.log(data);

dataPromise.then(res=>console.log(res)
)
*/
/*
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 5000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved value");
  }, 10000);
});

async function HandlePromise(params) {
  console.log("Hello");

  //Js engine was waiting for the promise to resolve
  const val = await p;
  console.log("Glen1");
  console.log(val);
  const val2 = await p2;
  console.log("Glen2");
  console.log(val2);
}
HandlePromise();
*/
/*
function getData() {
  //js will not wait for the promise to be resolved
  p.then((res) => console.log(res));
  console.log("Barasa");
}
getData();
*/
const API_URL = "https://api.github.com/users/glenspiky"
async function handleFunction(params) {
  try {
    const data = await fetch(API_URL);
  const jsonValue = data.json()
  console.log(jsonValue);
  
  } catch (err){
    console.log(err);
    
  }

  //Fetch ()=>response.json => jsonvalue
}
handleFunction();
