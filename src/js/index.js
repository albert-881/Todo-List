import "../css/styles.css";
import { openTodoForm } from "./ui";
import { closeTodoForm } from "./ui";
import { submitInfo } from "./todo";
import { openProjectForm } from "./ui";
import { closeProjectForm } from "./ui";
import { submitProject } from "./project";

export const myTodos = []; //array of all todos
export const myProjects = []; //array of all projects

export const todoForm = document.querySelector('#todo-form'); //the todo form is closed by default
todoForm.style.display = 'none';

export const projectForm = document.querySelector('#project-form'); //the project form is closed by default
projectForm.style.display = 'none';

const addTodo = document.querySelector('.createTodo'); //open todo form
addTodo.addEventListener('click', (e) => {
    openTodoForm();
});

const closeTodo = document.querySelector('#close-form'); //close todo form
closeTodo.addEventListener('click', (e) => {
    closeTodoForm();
});

const addProject = document.querySelector('.createProject'); //open project form
addProject.addEventListener('click', (e) => {
    openProjectForm();
});

const closeProject = document.querySelector('#close-project-form'); //close project form
closeProject.addEventListener('click', (e) => {
    closeProjectForm();
});

const form = document.querySelector('#todo-form'); //submit todo form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('this should submit the todo form');
    submitInfo();
});

const projectFormm = document.querySelector('#project-form');
projectFormm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('this should submit the project form')
    submitProject();
});


