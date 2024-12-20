import { myTodos } from "./index";
import { displayTodos } from "./ui";
import { myProjects } from "./index";

//***********************************************************************//

export function todos(title, description, dueDate, priority){
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
    }
}

export function addTodo(newTodo){
    myProjects[0].todos.push(newTodo);
    console.log(myTodos);
}

export function submitInfo() {
    let title = document.querySelector('#title').value;
    let description = document.querySelector('#description').value;
    let dueDate = document.querySelector('#due-date').value;
    let priority = document.querySelector('#priority').value;

    let newTodo = todos(title, description, dueDate, priority);
    addTodo(newTodo);
}

