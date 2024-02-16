function createTodo (
    title,
    description = '',
    dueDate = '',) {

    let priority = priority;

    const getPriority = () => priority;
    const increasePriority = () => priority++;
    const decreasePriority = () => priority--;

    return { 
        title, 
        description, 
        dueDate, 
        getPriority, 
        increasePriority, 
        decreasePriority,
    };

}

export { createTodo };