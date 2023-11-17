import { todos } from "../../model/persistence.js";

const todosContainer = document.getElementById("todos-container");
renderTodos(todos);

function renderTodos() {
    todosContainer.innerHTML = ``;

    todos.forEach(todo => {
        const todoContent = 
        `
            <h3>${todo.task}</h2>
            <p>${todo.description}</p>
            <p>Deadline: ${todo.deadline}</p>
            <p>Priority: ${todo.priority}</p>
        `;

        const todoTile = document.createElement("div");
        todoTile.classList.add("todo");
        todoTile.innerHTML = todoContent;

        todosContainer.append(todoTile);
    });

    if (todos.length === 0) {
        const todoContent = 
        `
            <div style="text-align:center">
            To Do List is empty!<br/>
            Try to add a new task by clicking a "Plus" button
            </div>
        `;

        const todoTile = document.createElement("div");
        todoTile.classList.add("todo");
        todoTile.innerHTML = todoContent;

        todosContainer.append(todoTile);
    }
}