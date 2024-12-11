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

export function displayTodos(todos) {
    console.log("Displaying todos:", todos); // Debug log
    const todoContainer = document.querySelector('#todo-container');
    todoContainer.innerHTML = '';

    for (let i = 0; i < todos.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `Title: ${todos[i].title} <br> 
        Description: ${todos[i].description} <br> 
        Due Date: ${todos[i].dueDate} <br> 
        Priority: ${todos[i].priority}`;

        todoContainer.append(newDiv);

        const btngroup = document.createElement('div');
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.addEventListener('click', (e) => {
            todos.splice(i, 1); // Remove the todo
            displayTodos(todos); // Update UI
        });

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

        const view = document.createElement('button');
        const options = document.createElement('button');
        view.innerHTML = `${myProjects[i].name}`
        options.innerHTML = 'options';

        view.addEventListener('click', (e) => {
            console.log(`Displaying todos for ${myProjects[i].name}`);
            displayTodos(myProjects[i].todos); // Pass the project's todos
        });        
        
        options.addEventListener('click', (e) => {
            console.log(`i am ${myProjects[i].name}`);
            edit_delete_create(i);
        });
        newDiv.appendChild(view);
        newDiv.appendChild(options);
        projectContainer.append(newDiv);
        options.className = 'projects';
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
    
    editBtn.addEventListener('click', (e) => {
    const newTitle = prompt('Enter new project title:', myProjects[index].title);
    if (newTitle) {
        myProjects[index].name = newTitle;
        displayProjects();
    }
    });

    makeTodo.addEventListener('click', (e) => {
        const title = prompt('Enter a todo title:');
        const description = prompt('Enter a description:');
        const dueDate = prompt('Enter a due date (YYYY-MM-DD):');
        const priority = prompt('Enter priority (High, Medium, Low):');
    
        if (title) {
            const newTodo = { title, description, dueDate, priority };
            myProjects[index].todos.push(newTodo); // Add to the project's todos array
        }
    });
}

//***********************************************************************//