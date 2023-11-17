import { validateTodo } from "../../model/todo.js";
import { saveTodo } from "../../model/persistence.js";

const submitButton = document.getElementById("add-todo-button")

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const todo = getTodo();
    const validation = validateTodo(todo);
    if (!validation.success) {
        alert(validation.errMessage);
        return;
    }

    saveTodo(todo);
    window.location.href = "../index/index.html";
})


const taskInput = document.getElementById("task");
const descriptionInput = document.getElementById("description");
const deadlineInput = document.getElementById("deadline");
const priorityInput = document.getElementById("priority");

function getTodo() {
    const task = taskInput.value;
    const description = descriptionInput.value;
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;


    return {
        task,
        description,
        deadline,
        priority
    }
}