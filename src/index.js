import { createTodo } from "./todo";
import { createProject } from "./project";
import { createDisplayUpdater } from "./display";

const displayUpdater = createDisplayUpdater();
const defaultProject = createProject("default");
const projects = [];

projects.push(defaultProject);

displayUpdater.projectUpdater.updateProjectList(projects);