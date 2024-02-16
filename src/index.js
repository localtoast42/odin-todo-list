import { createTodo } from "./todo";
import { createProject } from "./project";
import { 
    createProjectItem, 
    createProjectUpdater, 
    createTodoItem, 
    createTodoUpdater } from "./display";

const projectUpdater = createProjectUpdater();
const defaultProject = createProject("default");
const projects = [];

projects.push(defaultProject);

projectUpdater.updateProjectList(projects);

const addProjectButton = document.querySelector('#project-add');

addProjectButton.addEventListener('click', () => {
    let title = prompt('Enter project title:');
    projects.push(createProject(title));
    projectUpdater.updateProjectList(projects);
});