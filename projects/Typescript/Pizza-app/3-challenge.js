const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

let cashInRegister = 100;
const orderQueue = [];
let nextOrderId = 1;

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}
const pizzaName = "Pepperoni";
function placeOrder(pizzaName) {
  const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  //   console.log(selectedPizza);

  cashInRegister += selectedPizza.price;
  const newOrder = {
    pizza: selectedPizza,
    status: "ordered",
    id: nextOrderId++,
  };

  orderQueue.push(newOrder);

  return newOrder;
}
placeOrder(pizzaName);

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 *
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */
const orderId = 1;
function completeOrder(orderId) {
  const order = orderQueue.find((order) => order.id === orderId);
  if (order) {
    order.status = "completed";
  }
  console.log(order);

  return order;
}
completeOrder(orderId);
