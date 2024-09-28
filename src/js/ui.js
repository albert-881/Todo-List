import { todoForm } from "./index";
import { todos } from "./todo";
import { addTodo } from "./todo";

export function openTodoForm(){
    console.log('this would trigger the opening of the add todo');
    todoForm.style.display = 'block';
}

export function closeTodoForm(){
    console.log('this would trigger the closing of the add todo');
    todoForm.style.display = 'none';
}

export function submitInfo() {
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let dueDate = document.querySelector('#due-date').value;
    let priority = document.querySelector('#priority').value;

    let newTodo = todos(title,description,dueDate,priority);
    addTodo(newTodo);
}