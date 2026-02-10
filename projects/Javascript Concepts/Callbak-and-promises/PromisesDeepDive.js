// const cart = ["sues", "pants", "socks"];
// //Bad way

// createOder(cart, function (orderId) {
//   preoceedToPayment(orderId);
// });


// const promise = createOder(cart);
// promise.then(function (orderId) {
//   preoceedToPayment(orderId);
// });
const GITHUB_URL = "https://api.github.com/users/glenspiky";

const user = fetch(GITHUB_URL)
console.log(user);
user.then((data) => {
    console.log(data);
    
})
