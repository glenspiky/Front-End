# Call Stack, Memory Heap & Garbage Collection

> **Scope:** JavaScript runtime basics
>
> **Focus:** Call Stack (LIFO), Function Invocation & Stack Frames, Memory Heap (Objects & References), Garbage Collection (intuition)

---

## 🎯 Learning Outcome

- Clearly explain how JS executes functions using the **call stack**
- Identify **stack frames** during function invocation
- Understand where **objects live** (heap) and how references work
- Explain **when and why** garbage collection happens

---

## 1️⃣ Call Stack (LIFO)

### Definition

A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple **functions** — what function is currently being run and what functions are called from within that function, etc.

- A **Last-In, First-Out (LIFO)** structure that tracks **function execution**.
- Each function call creates a **stack frame**.

### What Goes on the Stack

- Function name
- Local variables (primitives)
- Parameters
- Return address

  -When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
  -Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
  -When the current function is finished, the interpreter takes it off the stack and resumes -execution where it left off in the last code listing.
  If the stack takes up more space than it was assigned, a "stack overflow" error is thrown.

### Key Rules

- Function call → **push** to stack
- Function return → **pop** from stack
- Too many nested calls → **Stack Overflow**

### Visual (Draw This)

```
| functionC() |
| functionB() |
| functionA() |
|  global     |
```

### Example

```js
function a() {
  b();
}
function b() {
  console.log("hi");
}
a();
```

### Notes

- JS is **single-threaded** → one call stack
- Async callbacks wait until the stack is empty

---

## 2️⃣ Function Invocation & Stack Frames

### Stack Frame

A stack frame is created **per function call** and contains:

- Local variables
- Parameters
- Execution state

### Lifecycle

1. Function is called → frame created
2. Function executes
3. Function returns → frame destroyed

### Example

```js
function add(x, y) {
  return x + y;
}
add(2, 3);
```

### Stack at Peak

```
| add(x, y) |
| global    |
```

---

## 3️⃣ Memory Heap (Objects & References)

### Definition

- A large, **unstructured** memory area
- Stores **objects, arrays, functions**

### Stack vs Heap

| Stack      | Heap        |
| ---------- | ----------- |
| Fast       | Flexible    |
| Ordered    | Unordered   |
| Primitives | Objects     |
| References | Actual data |

```js
const n = 123; // allocates memory for a number
const s = "string"; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
const a = [1, null, "str2"];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener("click", () => {
  someElement.style.backgroundColor = "blue";
});
```

### Example

```js
let user = { name: "Glen" };
```

- `user` → stored in **stack** (reference)
- `{ name: "Glen" }` → stored in **heap**

### Reference Model

```
Stack            Heap
-----            -----
user  ───────▶  { name: "Glen" }
```

### Notes

- Multiple variables can reference the **same heap object**
- Reassigning a variable does **not** mutate the heap object

---

## 4️⃣ Garbage Collection (GC) — Intuition

### What is GC?

- Automatic process that **frees unused memory**
- Prevents memory leaks

### Core Idea: Reachability

- If something is **reachable**, it stays
- If **unreachable**, it’s removed

### Roots

- Global variables
- Variables in the call stack

### Mark-and-Sweep (Simplified)

1. Mark all reachable objects
2. Sweep (delete) unreachable ones

### Example

```js
let obj = { x: 10 };
obj = null;
```

- Object has **no references**
- Eligible for GC

### Important Notes

- GC timing is **not deterministic**
- Closures and globals can **prevent GC**

---

## 🔗 How They Work Together

```js
function createUser() {
  let user = { name: "Alex" };
  return user;
}
let u = createUser();
```

### Execution Flow

1. `createUser()` pushed to stack
2. `{ name: "Alex" }` created in heap
3. `user` references heap object
4. Function returns → stack frame removed
5. `u` still references object → **not GC’d**

---

## ⚠️ Common Pitfalls

- Infinite recursion → **stack overflow**
- Forgotten event listeners → **memory leaks**
- Large global objects → long-lived memory

---

## 🧠 One-Line Summary

- **Call Stack** → what’s running now
- **Memory Heap** → where objects live
- **Garbage Collector** → cleans unused memory

---

## ✅ Self-Check

- Can I draw stack + heap for a given snippet?
- Can I explain why an object is or isn’t GC’d?
- Can I describe LIFO without hesitation?

---

## 📝 Personal Notes

- When we start with a different call stack whnever
  we invoke a function it is automatically added to the call stack.
- The function is automatuically added to the call
  stack
- Once the function has executed all of its code it
- is automatically removed from the call stack
