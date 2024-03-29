function createProjectItem (project) {
    const projectItem = document.createElement('li');
    projectItem.classList.add('project-item');
    projectItem.textContent = project.getTitle();

    return projectItem;
}

function createProjectUpdater () {
    const projectsList = document.querySelector('.projects');

    const updateProjectList = (projects) => {
        projectsList.textContent = '';
        for (const project of projects) {
            const item = createProjectItem(project);
            projectsList.appendChild(item);
        }
    }

    return { updateProjectList };
}

function createTodoItem (todo) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.textContent = todo.title;

    return todoItem;
}

function createTodoUpdater () {
    const contentDiv = document.querySelector('.content');

    const updateTodoList = (todos) => {
        for (const todo of todos) {
            const item = createTodoItem(todo);
            contentDiv.appendChild(item);
        }
    }

    return { updateTodoList };
}

function createDisplayUpdater () {
    const projectUpdater = createProjectUpdater();
    const todoUpdater = createTodoUpdater();

    return { 
        projectUpdater,
        todoUpdater,
    };
}

export { createProjectItem, createProjectUpdater, createTodoItem, createTodoUpdater };