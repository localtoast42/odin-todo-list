function createTodo (
    title,
    description = '',
    dueDate = '',
    priority = 0,) {

    const title = title;
    const description = description;
    const dueDate = dueDate;

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