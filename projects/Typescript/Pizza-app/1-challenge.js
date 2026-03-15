const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */
function placeOrder(cashInRegister) {
  const searchSting = "Veggie";
  const filterdArray = menu.filter((item) => {
    return item.name === searchSting;
  });
  console.log(filterdArray);
  orderQueue.push(filterdArray);
  console.log(orderQueue[0][0].price);
  const NewCashInRegister = (cashInRegister + orderQueue[0][0].price);
  console.log(NewCashInRegister,orderQueue);
}
placeOrder(cashInRegister);

//Aproach 2
function placeOrder(cashInRegister) {
  const searchSting = "Veggie";
  const filterdArray = menu.find((item) => {
    return item.name === searchSting;
  });
  console.log(filterdArray);
  orderQueue.push(filterdArray);
  console.log(orderQueue[0].price);
  const NewCashInRegister = cashInRegister + orderQueue[0].price;
  console.log(NewCashInRegister, orderQueue);
}
placeOrder(cashInRegister);

