const todos = document.querySelector(".todos");
const taskInput = document.querySelector(".inputBox");
const addBtn = document.querySelector(".task-btn");

let todosData = [];
async function getTodos() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=15",
  );
  const jsonData = await response.json();
  todosData = jsonData.filter((todo) => todo.title.split(" ").length <= 4);
 
  renderTodos();
}
function renderTodos() {
  todos.innerHTML = "";
  todosData.forEach((todo) => {
    const todoEl = document.createElement("div");
    todoEl.classList.add("todoEl");
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.classList.add("check-box");
    checkBox.checked = todo.completed;
    const todoItem = document.createElement("span");
    todoItem.textContent = todo.title;
    checkBox.addEventListener("click", () => {
      if (todo.completed) {
        todo.completed = false;
        console.log(todo.completed);
        todoItem.style.textDecoration = "none";
      } else {
        todo.completed = true;
        console.log(todo.completed);
        todoItem.style.textDecoration = "line-through";
      }
    });
    if (todo.completed) {
      todoItem.style.textDecoration = "line-through";
    }
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      const newTodos = todosData.filter((tdItem) => tdItem.id !== todo.id);
      console.log(newTodos);
      todoEl.remove();
    });
    todoEl.appendChild(checkBox);
    todoEl.appendChild(todoItem);
    todoEl.appendChild(deleteBtn);
    todos.appendChild(todoEl);
  });
}

addBtn.addEventListener("click", async () => {
  //console.log(taskInput.value);
  todoText = taskInput.value.trim();
  if (todoText != "") {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: todoText,
        completed: false,
      }),
    });
    const newTodo = await response.json();

    todosData.push(newTodo);
    taskInput.value = "";
    console.log(todosData);
    renderTodos();
  }
});
getTodos()

/*

async function getTodos() {
  const fetchedTodos = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=15",
  );
  const jsonData = await fetchedTodos.json();
  const filteredTodos = jsonData.filter((todo) => todo.title.split(" ").length <= 4);

  console.log(filteredTodos);

  filteredTodos.forEach((todo) => {
    const todoEl = document.createElement("div");
    todoEl.classList.add("todoEl");
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.classList.add("check-box");
    checkBox.checked = todo.completed;
    const todoItem = document.createElement("span");
    todoItem.textContent = todo.title;
    checkBox.addEventListener("click", () => {
      if (todo.completed) {
        todo.completed = false;
        console.log(todo.completed);
        todoItem.style.textDecoration = "none";
      } else {
        todo.completed = true;
        console.log(todo.completed);
        todoItem.style.textDecoration = "line-through";
      }
    });
    if (todo.completed) {
      todoItem.style.textDecoration = "line-through";
    }
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      const newTodos = filteredTodos.filter((tdItem) => tdItem.id !== todo.id);
      console.log(newTodos);
      todoEl.remove();
    });
    todoEl.appendChild(checkBox);
    todoEl.appendChild(todoItem);
    todoEl.appendChild(deleteBtn);
    todos.appendChild(todoEl);
  });
}
getTodos();

addBtn.addEventListener("click", () => {
  //console.log(taskInput.value);
  todoText = taskInput.value.trim();
  if (todoText != "") {
    async function addTodo(params) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: todoText,
            completed: false,
          }),
        },
      );
      const newTodo = await response.json();
       
        filteredTodos.push(newTodo)
        console.log(filteredTodos);
        
    }
    addTodo();
  }
});
*/
