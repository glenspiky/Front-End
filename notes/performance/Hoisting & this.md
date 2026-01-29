# JavaScript Hoisting, TDZ & `this` 

## 1. Hoisting

**Hoisting** is JavaScript’s behavior of moving **declarations** to the top of their scope during the **creation phase** of execution.

> ⚠️ Only declarations are hoisted, **not initializations**

---

### 1.1 Hoisting Rules Summary

| Declaration Type     | Hoisted             | Initialized       | Accessible Before Declaration |
| -------------------- | ------------------- | ----------------- | ----------------------------- |
| `var`                | Yes                 | Yes (`undefined`) | Yes                           |
| `let`                | Yes                 | No                | ❌ ReferenceError (TDZ)       |
| `const`              | Yes                 | No                | ❌ ReferenceError (TDZ)       |
| Function Declaration | Yes                 | Yes               | Yes                           |
| Function Expression  | Depends on variable | Depends           | Usually ❌                    |

---

### 1.2 `var` Hoisting

```js
console.log(a); // undefined
var a = 10;
How JS interprets it:

var a;
console.log(a);
a = 10;
var is hoisted

Initialized with undefined

No TDZ

1.3 let and const Hoisting
console.log(b); // ReferenceError
let b = 20;
let and const ARE hoisted

BUT they are not initialized

Access before declaration triggers TDZ

1.4 Function Declarations
sayHi();

function sayHi() {
  console.log("Hi");
}
Fully hoisted

Can be called before declaration

1.5 Function Expressions
sayHello(); // ReferenceError

const sayHello = function () {
  console.log("Hello");
};
Variable is hoisted

Function is NOT

TDZ applies (const)

2. Temporal Dead Zone (TDZ)
TDZ is the time between entering scope and variable initialization.

Applies to:

let

const

class

2.1 TDZ Example
{
  console.log(x); // ReferenceError
  let x = 5;
}
TDZ starts at beginning of scope

TDZ ends at declaration line

2.2 Important TDZ Rule
typeof y; // ReferenceError
let y = 10;
Even typeof fails inside TDZ.

3. this Keyword
Rule: this is determined by how a function is called, not where it is written.

3.1 Global this
console.log(this);
Browser: window

Node.js: {} (module scope)

3.2 this in Regular Functions
function test() {
  console.log(this);
}
test();
Non-strict mode → window

Strict mode → undefined

"use strict";
function test() {
  console.log(this); // undefined
}
3.3 this in Object Methods
const user = {
  name: "Alex",
  greet() {
    console.log(this.name);
  }
};

user.greet(); // "Alex"
this refers to the object before the dot (.)

3.4 this in Arrow Functions
const user = {
  name: "Alex",
  greet: () => {
    console.log(this.name);
  }
};
❌ Does NOT work as expected.

Why?
Arrow functions do NOT have their own this

They inherit this from surrounding scope

3.5 Correct Arrow Function Usage
const user = {
  name: "Alex",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

user.greet(); // "Alex"
✔️ Arrow inherits this from greet

4. Common Pitfalls
Hoisting
Assuming let / const are not hoisted ❌

Using variables before declaration ❌

this
Using arrow functions as object methods ❌

Expecting this to refer to function owner ❌

5. Mental Models (Important)
Hoisting
“Declarations are registered first, execution happens later”

TDZ
“Declared but not usable yet”

this
“Who called the function?”

6. MDN References
Hoisting
https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

let / const / TDZ
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

this keyword
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this



```
