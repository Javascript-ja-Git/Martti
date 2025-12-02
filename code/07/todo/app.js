const addButton = document.getElementById('add-todo');
const todoInput = document.getElementById('todo-text');
const list = document.getElementById('todo-list');

const todos = JSON.parse(localStorage.getItem('todos')) || [];
console.log(todos);
generateList();

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodo() {
  const todo = todoInput.value;
  if (todo) {
    todos.push(todo);
    todoInput.value = '';
    saveTodos();
    clearList();
    generateList();
  }
}

addButton.addEventListener('click', createTodo);

todoInput.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    createTodo();
  }
});

function generateList() {
  for (let i = 0; i < todos.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = todos[i];
    const removeButton = document.createElement('button');
    removeButton.innerText = 'X';
    removeButton.style.marginLeft = '10px';
    removeButton.addEventListener('click', function () {
      todos.splice(i, 1);
      saveTodos();
      clearList();
      generateList();
    });
    listItem.appendChild(removeButton);
    list.appendChild(listItem);
  }
}

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}