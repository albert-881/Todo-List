import { myProjects } from "./index";
import { displayProjects } from "./ui";

//***********************************************************************//

export function createProject(name){
    return {
        name:name
    }
}

export function addProject(newProject){
    myProjects.push(newProject);
    displayProjects();
    console.log(myProjects);
}

export function submitProject(){
    let name = document.querySelector('#name').value;

    let newProject = createProject(name);
    addProject(newProject);
}