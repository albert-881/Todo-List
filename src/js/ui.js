import { todoForm } from "./index";
import { myTodos } from "./index";
import { projectForm } from "./index";
import { myProjects } from "./index";
import "../css/styles.css";
//***********************************************************************//

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

        const btngroup = document.createElement('div');
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', (e) => {
            myTodos.splice(i, 1); // Remove the todo at index i
            displayTodos(); 
        })
        
        btngroup.append(delBtn);
        newDiv.append(btngroup);
    }
}

//***********************************************************************//

export function openProjectForm(){
    console.log('this would trigger the opening of the project form');
    projectForm.style.display = 'block';
}

export function closeProjectForm(){
    console.log('this would trigger the closing of the project form');
    projectForm.style.display = 'none';
}

export function displayProjects(){
    const projectContainer = document.querySelector('#project-container');
    projectContainer.innerHTML = '';
    for (let i = 0; i < myProjects.length; i++) {
        const newDiv = document.createElement('div');

        const newButton = document.createElement('button');
        newButton.innerHTML = `${myProjects[i].name}`;

        newButton.addEventListener('click', (e) => {
            console.log(`i am ${myProjects[i].name}`);
            edit_delete_create(i);
        });
        newDiv.appendChild(newButton);
        projectContainer.append(newDiv);
        newButton.className = 'projects';
    }

}

export function edit_delete_create(index){
    const projectContainer = document.querySelector('#project-container');

    const existingButtons = projectContainer.querySelectorAll('.action-button');
    existingButtons.forEach((button) => button.remove());

    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    const makeTodo = document.createElement('button');

    editBtn.innerHTML = 'edit';
    deleteBtn.innerHTML = 'delete';
    makeTodo.innerHTML = 'make a todo';

    editBtn.className = 'action-button';
    deleteBtn.className = 'action-button';
    makeTodo.className = 'action-button';
    
    projectContainer.appendChild(makeTodo);
    projectContainer.appendChild(deleteBtn);
    projectContainer.appendChild(editBtn);

    deleteBtn.addEventListener('click', (e) => {
        myProjects.splice(index, 1);
        displayProjects();
    });
    
}

//***********************************************************************//