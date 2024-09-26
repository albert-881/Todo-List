import { todoForm } from "./index";

export function openTodoForm(){
    console.log('this would trigger the opening of the add todo');
    todoForm.style.display = 'block';
}

export function closeTodoForm(){
    todoForm.style.display = 'none';
}