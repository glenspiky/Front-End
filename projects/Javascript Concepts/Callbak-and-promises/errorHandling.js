const cart = ["shues", "pants", "shirts"];

createOder(cart)
  .then(function (orderId) {
    console.log(orderId);
return orderId
    //procedToPayment(orderId);
  })
  .then((orderId) => {
    return procedToPayment(orderId);
  })
  .then((paymentInfo) => {
     console.log("payment info");
  })
  .catch((err) => {
    console.log(err.message);
  });
//producer
function createOder(cart) {
  const pr = new Promise((resolve, reject) => {
    //creteOder
    //validateCart
    //orderId
    if (!validateCart(cart)) {
      const err = new Error("cart is invalid");
      return reject(err);
    }
    //logic for create order
    const orderId = "1234";
    if (orderId) {
      setTimeout((order) => {
        resolve(orderId);
      }, 5000);
    }
  });
  return pr;
}

function validateCart() {
  return false;
}
function procedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("payment seccesful");
  });
}
