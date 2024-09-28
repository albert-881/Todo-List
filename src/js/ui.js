import { todoForm } from "./index";
import { myTodos } from "./index";

export function openTodoForm(){
    console.log('this would trigger the opening of the add todo');
    todoForm.style.display = 'block';
}

export function closeTodoForm(){
    console.log('this would trigger the closing of the add todo');
    todoForm.style.display = 'none';
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