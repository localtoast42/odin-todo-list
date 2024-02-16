function createProject (title) {
    const title = title;
    const todosInProgress = [];
    const todosCompleted = [];

    const addTodo = (todoToAdd) => {
        this.todosInProgress.push(todoToAdd);
    }

    const completeTodo = (todoToComplete) => {
        this.todosInProgress.filter((todo) => todo !== todoToComplete);
        this.todosCompleted.push(todoToComplete);
    }

    const removeTodo = (todoToRemove) => {
        this.todosInProgress.filter((todo) => todo !== todoToRemove);
        this.todosCompleted.filter((todo) => todo !== todoToRemove);
    }

    return {
        title, 
        todosInProgress, 
        todosCompleted, 
        addTodo, 
        completeTodo, 
        removeTodo,
    };

}

export { createProject };