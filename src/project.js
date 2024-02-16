function createProject (title) {
    const todosInProgress = [];
    const todosCompleted = [];

    const getTitle = () => title;

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
        todosInProgress, 
        todosCompleted, 
        getTitle,
        addTodo, 
        completeTodo, 
        removeTodo,
    };

}

export { createProject };