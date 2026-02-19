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
    const todoEl = document.createElement("li");
    todoEl.classList.add("todoEl");
    todoEl.dataset.id=todo.id
    const checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.classList.add("check-box");
    checkBox.checked = todo.completed;
    const todoItem = document.createElement("span");
    todoItem.classList.add("todo-text");
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
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-btn");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      const newTodos = todosData.filter((tdItem) => tdItem.id !== todo.id);
      console.log(newTodos);
      todoEl.remove();
    });
    todoEl.appendChild(checkBox);
    todoEl.appendChild(todoItem);
    todoEl.appendChild(editBtn);
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
getTodos();

const updateTodo = async (id, newText) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title: newText }),
      },
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
document.addEventListener("click", async (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const li = e.target.closest("li");
    const id = li.dataset.id;
    const textSpan = li.querySelector(".todo-text");
    const currentText = textSpan.textContent;
    const editBtn=li.querySelector(".edit-btn")
    textSpan.innerHTML = `
    <input type="text" value="${currentText}" class="edit-input"/>
    <button class="save-btn" >Save</button>
    `;
    textSpan.style.display = "flex"
    textSpan.style.gap = "5px";
    editBtn.style.display="none"
    
  }
  if (e.target.classList.contains("save-btn")) {
    const li = e.target.closest("li");
    const id = li.dataset.id;
    const input = li.querySelector(".edit-input");
    const newText = input.value.trim()
    if (newText==="") return
    const updated = await updateTodo(id, newText)
    todosData=todosData.map(td=>td.id==id?{...td, title:updated.title}:td)
    li.querySelector(".todo-text").textContent = updated.title
    const editBtn = li.querySelector(".edit-btn");
    if (editBtn) editBtn.style.display="inline-block"
      
    
  }
});
