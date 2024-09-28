import { myTodos } from "./index";

export function todos(title, description, dueDate, priority){
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }
}

export function addTodo(newTodo){
    myTodos.push(newTodo);
    console.log(newTodo);
    displayTodos();
}

export function displayTodos() {
    const todoContainer = document.querySelector('#todo-container');
    todoContainer.innerHTML = '';
    for (let i = 0; i < myTodos.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `Title: ${myTodos[i].title} <br> 
        Description: ${myTodos[i].description} <br> 
        Due Date: ${myTodos[i].dueDate} <br> 
        Priority: ${myTodos[i].priority}`;

        todoContainer.append(newDiv);
    }
}

