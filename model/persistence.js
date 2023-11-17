const todosKey = "todos";

const getTodosFromStorage = () => {
   return JSON.parse(window.localStorage.getItem(todosKey)) ?? [];
}

export const todos = getTodosFromStorage();

export const saveTodo = (todo) => {
    todos.push(todo);
    window.localStorage.setItem(todosKey, JSON.stringify(todos));
}