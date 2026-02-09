# Objects, Prototypes & `new` — Deep Dive

## 🎯 Goal
Understand how JavaScript creates objects, links prototypes, binds `this`, and what the `new` keyword actually does under the hood.

This topic connects:
- execution context
- `this` binding
- memory (heap & references)
- prototypes
- closures (private state)

---

## 1️⃣ Objects in JavaScript

### What is an object?
- Objects are **reference types**
- Stored in the **memory heap**
- Variables store **references**, not the object itself

```js
const obj = { name: "Glen" };


🧠 Key idea:

Variables don’t store objects — they store references pointing to objects in the heap.

Object creation methods

Object literal {} ✅

Constructor functions + new

Object.create()

class syntax (syntactic sugar)

2️⃣ Memory & Object References
let a = { x: 1 };
let b = a;
b.x = 2;

What happens?

Only one object exists in the heap

Both a and b reference the same object

Mutating through one reference affects the other

🧠 Why GC cannot delete the object:

Because it is still reachable through active references on the stack.

3️⃣ Prototype Basics
What is a prototype?

Every JavaScript object has an internal [[Prototype]]

Used for property and method lookup

Forms the prototype chain

Access methods:

Object.getPrototypeOf(obj);
obj.__proto__; // legacy, but commonly seen

Prototype chain example
obj
 ↓
Object.prototype
 ↓
null


🧠 Property lookup rule:

JavaScript searches the object first, then its prototype, then continues up the chain until null.

4️⃣ Constructor Functions
function User(name) {
  this.name = name;
}

Key rules

Function intended to be called with new

this refers to the newly created object

By convention, constructor names are capitalized

What happens if new is missing?
User("Glen");


In non-strict mode: this points to the global object → accidental global mutation

In strict mode: this is undefined → runtime error

🧠 Why this is dangerous:

It causes hard-to-debug bugs and global state pollution.

5️⃣ The new Keyword — Step by Step
const u = new User("Glen");

JavaScript internally performs:

Create a new empty object {}

Link its prototype

obj.__proto__ = User.prototype


Bind this to the new object

Execute the constructor function

Return the object (unless another object is explicitly returned)

Manual implementation of new
function myNew(Constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, Constructor.prototype);
  const result = Constructor.apply(obj, args);
  return typeof result === "object" && result !== null ? result : obj;
}


🧠 Why this works:

It replicates object creation, prototype linking, this binding, and return behavior.

6️⃣ prototype vs __proto__
Term	Belongs to	Purpose
prototype	Constructor function	Shared methods
__proto__	Object instance	Points to its prototype
u.__proto__ === User.prototype; // true

7️⃣ Sharing Methods via Prototype
User.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

Why this matters

One function shared by all instances

Lower memory usage

Faster creation of objects

🧠 Rule:

Put shared behavior on the prototype, not inside the constructor.

8️⃣ instanceof
u instanceof User; // true

How it works

Checks whether User.prototype exists in u’s prototype chain

Does not compare constructor names

🧠 Important:

instanceof is about prototypes, not constructors.

9️⃣ Object.create()
const parent = {
  greet() {
    return "hello";
  },
};

const child = Object.create(parent);

Key differences vs new

No constructor execution

Direct prototype delegation

No this binding logic

Use cases:

Pure delegation

Lightweight objects

Avoiding side effects

🔟 Common Pitfalls
❌ Forgetting new
User("Glen");

❌ Arrow functions as constructors
const User = () => {};
new User(); // TypeError

❌ Overwriting prototype incorrectly
User.prototype = {};


🧠 Why this breaks things:

Existing instances still point to the old prototype, breaking method access.

1️⃣1️⃣ Objects, Closures & Private State
function User(name) {
  let secret = "123";
  this.getSecret = function () {
    return secret;
  };
}

What’s happening?

secret is stored in a closure

Not accessible via object or prototype

Each instance gets its own private copy

Trade-offs:

✅ Privacy

❌ Higher memory usage

1️⃣2️⃣ Mental Model Summary

Objects live in the heap

Variables store references

new performs:

object creation

prototype linking

this binding

Prototypes enable method sharing

Closures enable private state

🧪 Practice
Predict the output
function A() {}
A.prototype.x = 1;

const a = new A();
console.log(a.x);

function B() {
  return { y: 2 };
}
const b = new B();
console.log(b.y);


Explanation:

First example uses prototype lookup

Second example returns a new object, replacing this

🧠 Interview Explainers

Explain how new works internally

Difference between Object.create() and new

Why JavaScript uses prototypes instead of classical inheritance

Why methods belong on prototypes

📌 One-Line Takeaway

new is not magic — it’s just object creation, prototype wiring, and this binding working together.