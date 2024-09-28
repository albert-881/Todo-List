import "../css/styles.css";
import { openTodoForm } from "./ui";
import { closeTodoForm } from "./ui";
import { submitInfo } from "./todo";

export const myTodos = [];

export const todoForm = document.querySelector('#todo-form')
todoForm.style.display = 'none';

const addTodo = document.querySelector('.createTodo'); //open form
addTodo.addEventListener('click', (e) => {
    openTodoForm();
});

const closeTodo = document.querySelector('#close-form'); //close form
closeTodo.addEventListener('click', (e) => {
    closeTodoForm();
});

const form = document.querySelector('#todo-form'); //submit form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitInfo();
});