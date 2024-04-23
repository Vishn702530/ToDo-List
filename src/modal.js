export function setupAddTodoForm() {
    const addTodoForm = document.getElementById('addTodo');

    addTodoForm.addEventListener('submit', function (event) {

        event.preventDefault();


        const title = document.getElementById('todoTitle').value;
        const description = document.getElementById('todoDescription').value;
        const dueDate = document.getElementById('todoDueDate').value;
        const projectName = document.getElementById('todoProject').value;
        const priority = document.getElementById('todoPriority').value;
        var todo = new TodoItem(title, description, projectName, dueDate, priority);
        return todo;


    });
}