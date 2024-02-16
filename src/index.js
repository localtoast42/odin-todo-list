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