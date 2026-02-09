# JavaScript Engine & Execution Context

## 📌 Overview

The JavaScript Engine executes JS code by **creating execution contexts**, managing memory, and running code line by line using the **call stack**.

> In short: _JS code doesn’t just “run” — it is prepared first, then executed._

---

## 🧠 Mental Model

Think of JavaScript like this:

1. **Memory is allocated first**
2. **Code is executed after**
3. Everything runs inside a **stack of execution contexts**

---

## ⚙️ JavaScript Engine

A JavaScript Engine is a program that:

- Parses JS code (check for syntax and converts it int a format that it can process)
- Converts it to machine code
  > There is compilation, hybrid and interpretation hence easy to debug and also fast
- Executes it
  > ecmascript specification defines how js code should run
  > --JS -> Engine -> Binary

## Just in time compiler (JIT)

- introduced by google in 2008
- combine compilatiion and interpretation
  > instead of interprating line by line it compiles a function to machine code
  > -This is faster and easy to debug

### Common JS Engines

- **V8** → Chrome, Node.js
- **SpiderMonkey** → Firefox
- **JavaScriptCore** → Safari

---

## 📦 Execution Context

An Execution Context is an environment where JS code is evaluated.
JS breaks code into small units b4 interprating it.
each part runs in its own isolated env executed one after onother

### Types of Execution Contexts

1. **Global Execution Context (GEC)**
2. **Function Execution Context (FEC)**
3. **Eval Execution Context** (rare, avoid)

#### Global execution context (GEC)

> like a container holding everything that your program needs to start running
> -It’s the default environment for your code.
> -Every JS program has exactly one GEC.
> -Inside it:

1. All global variables and functions live.
2. The global object is created (window in browser, global in Node.js).
3. **this is set to the global object.**

💡 Mental model:

“The stage is set, props and actors are ready before the play starts.”
-It includes **4 main components** (es5):

1. Window: Global object
2. this:window
3. Variable object
4. Scope chain

## Components of GEC(es6)

-The GEC has 2 main components:

### 1. Variable Environment (VE)

Holds all variables and function declarations.
Two phases:
**Creation phase**
JS scans the code and registers all function declarations and variables declared with var.
Variables declared with var are initialized as undefined.
Function declarations are fully hoisted (they can be called before their declaration).
**Execution phase**
Code executes line by line.
Variables are assigned their real values.
Functions are now callable (already hoisted).

**Hoisting is JavaScript’s behavior of moving declarations to the top of their scope during the creation phase of the execution context**

**Example:**
console.log(a) // undefined
console.log(foo()) // "Hello"
var a = 10;

function foo() {
return "Hello";
}

Explanation:
a exists during creation → undefined
foo exists during creation → fully callable

---

## 🏗️ Phases of Execution Context

Every execution context has **two phases**:

### 1 Memory Creation Phase (Hoisting)

- Variables → `undefined`
- Functions → stored fully
- `this` → determined

```js
console.log(a); // undefined
var a = 10;
```

### 2 Execution

Code executes line by line.
Variables are assigned their real values.
Functions are now callable (already hoisted)

## summary

JS Engine & Execution Context — TL;DR
**🧠 JS Engine**
-Executes JavaScript (e.g. V8)
-Manages memory, call stack, execution

**🧩 Execution Context**
-Environment where JS code runs.

**Types**
-🌐 Global (once)
-🔁 Function (per call)

**⏳ Two Phases**

> 1. 🛠️ Creation Phase
>    -var → undefined
>    -Functions → fully hoisted
>    -let/const → TDZ
>    -this is set

> 2. ▶️ Execution Phase
>    -Code runs line by line
>    -Values assigned
>    -Functions executed
>    -🚀 Hoisting
>    -Declarations are hoisted
>    -Assignments are not
>    -Functions ≠ var

**🧠 Mental Model**
-Prepare first → Execute later
**🔑 Key Takeaway**
-Execution Context explains:
-Hoisting
