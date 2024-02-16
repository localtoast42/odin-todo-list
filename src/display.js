function createProjectItem (project) {
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectItem.textContent = project.title;

    return { projectItem };
}

function createProjectUpdater () {
    const projectsList = document.querySelector('projects');

    const updateProjectList = (projects) => {
        projectsList.textContent = '';
        for (project in projects) {
            item = createProjectItem(project);
            projectsList.appendChild(item);
        }
    }

    return { updateProjectList };
}

function createDisplayUpdater () {

    return {};
}