import { todos } from "./persistence.js";

const validateString = (input, inputName) => {
    if (!input || typeof input !== "string" || input.trim() === "") {
        return {
            success: false,
            errMessage: `${inputName} is not correct. The length must be more then one symbol`
        };
    }
    return {
        success: true
    }
}

export const validateTodo = (todo) => {
    const taskValidation = validateString(todo.task, "Task");
    if (!taskValidation.success) {
        return taskValidation;
    }

    if (todos.filter(t => t.task.toLowerCase() === todo.task.toLowerCase()).length > 0) {
        return {
            success: false,
            errMessage: "Task name must be unique"
        };
    }

    const descriptionValidation = validateString(todo.description, "Description");
    if (!descriptionValidation.success) {
        return descriptionValidation;
    }

    const deadline = todo.deadline;
    if (isNaN(Date.parse(deadline))) {
        return {
            success: false,
            errMessage: "Deadline must be date object"
        };
    }
    if (Date.parse(deadline) < Date.now()) {
        return {
            success: false,
            errMessage: "Deadline must be set in future"
        };
    }

    return {
        success: true,
        todo
    };
}