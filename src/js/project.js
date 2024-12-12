import { myProjects } from "./index";
import { displayProjects } from "./ui";

//***********************************************************************//

export function createProject(name){
    return {
        name:name,
        todos:[]
    };
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

export function submitInitialProject(projectName){
    let initial_project = createProject(projectName);
    addProject(initial_project);
}