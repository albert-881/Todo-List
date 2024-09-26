import "../css/styles.css";
import { todos } from "./todo";
import { openTodoForm } from "./ui";
import { closeTodoForm } from "./ui";

const firstTodo = todos('tu mama', 'huele', 'a', 'kaka');
console.log(firstTodo);

export const todoForm = document.querySelector('#todo-form')
todoForm.style.display = 'none';

const addTodo = document.querySelector('.createTodo');
addTodo.addEventListener('click', (e) => {
    openTodoForm();
});

const closeTodo = document.querySelector('#close-form');
closeTodo.addEventListener('click', (e) => {
    closeTodoForm();
});