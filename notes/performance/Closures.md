# 🔒 Closures (Patterns + Debugging)

## 📌 Definition

A **closure** is created when a function **remembers and accesses variables from its lexical scope**, even after the outer function has finished executing.

> A function bundled together with its surrounding state (lexical environment).

---

## 🧠 Closure Creation

### How Closures Are Created

Closures are created when:

- A function is defined inside another function
- The inner function references variables from the outer function

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
```

> Key Points
> -Closures are created at function definition, not execution

-The inner function keeps a reference to the outer scope

> 🗄️ Memory Retention
> Why Memory Is Retained
> JavaScript keeps variables alive as long as they are referenced

-The outer function’s variables stay in memory because the inner function still needs them

```js
function createUser(name) {
  return function greet() {
    console.log(`Hi, ${name}`);
  };
}

const greetJohn = createUser("John");
```

> 🧠 name stays in memory even after createUser() finishes.

> Garbage Collection
> -Variables captured by closures cannot be garbage collected

-They are released only when no references to the closure remain

### 🧩 Common Closure Patterns

🔐 **Private Variables** (Encapsulation)
**🔐 What Are Private Variables?**

-Private variables are variables that:

-Live inside a function or scope

-Cannot be accessed or modified directly from outside

-Are exposed only through public methods

-In JavaScript, privacy is commonly achieved using closures.

> 🧠 Why Private Variables Exist

They help with:

-Encapsulation – hiding internal details

-Data safety – prevent accidental changes

-Clean APIs – expose only what’s necessary

```js
function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
  };
}

const counter = createCounter();
counter.increment(); // 1
```

> ✅ count is private
> ❌ Cannot be accessed directly

### 🏭 Factory Functions

-Each factory call creates a new private copy:

```js
function createMultiplier(multiplier) {
return function (value) {
return value \* multiplier;
};
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
```

📌 Each factory call creates a new closure with its own state

### 📞 Callbacks & Async Closures

```js
function fetchData() {
  let token = "abc123";

  setTimeout(() => {
    console.log(token);
  }, 1000);
}
```

⏳ Even after fetchData() finishes, the callback remembers token.

> ⚠️ Common pitfall with loops:

```js
for (var i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 1000);
}
// logs: 3, 3, 3
✅ Fix using let (block scope):

for (let i = 0; i < 3; i++) {
setTimeout(() => console.log(i), 1000);
}
```

> this works coz let is block scoped while var is not

### 📦 Private Variables vs Public Variables

> ❌ Public (Bad for state)

```js
const counter = {
  count: 0,
};

counter.count = 999; // 😬 anyone can change it
```

✅ Private (Controlled access)

```js
function counter() {
  let count = 0;

  return () => ++count;
}
```

> Private variables are hidden state, accessible only through trusted functions.

## 🐞 Debugging Closures in DevTools

> 🔍 Inspecting Closures

1. Open Chrome DevTools

2. Go to Sources

3. Set a breakpoint inside the inner function

4. Look at Scope panel:

-Local

-Closure

-Global

> You’ll see captured variables under Closure

> 🧪 Debug Example

```js
function outer() {
  let secret = "hidden";

  return function inner() {
    debugger;
    console.log(secret);
  };
}

const fn = outer();
fn();
```

![alt text](image.png)

1. 🛠️ When paused:

2. Expand Closure (outer) in DevTools

Inspect secret

### 🚨 Common Debugging Issues

> Unexpected shared state between closures

> Memory leaks from long-living closures

> Variables changing due to async execution

### ⚠️ Common Mistakes

> Assuming closures copy values (they don’t)

> Overusing closures → memory leaks

> Using var in loops with async callbacks

### ✅ Best Practices

> Use closures intentionally, not accidentally

> Prefer let and const

> Clean up references when closures are no longer needed

> Be cautious with closures in long-running apps

### 🎯 Mental Model

> Closures don’t store values — t**hey store references to variables.**

## 📝 Quick Summary

Closures capture lexical scope

They enable private state & factories

Memory is retained via references

DevTools → Scope → Closure is your best friend

Private variables are not directly accessible

Closures are the classic way to create them

They help protect state and enforce rules

DevTools shows them under Closure
