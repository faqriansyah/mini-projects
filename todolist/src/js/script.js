const taskListElement = document.getElementById("task-list");
const addButton = document.getElementById("add");
const taskInput = document.getElementById("task");

let tasks = [];

function createElement(type, { text = '', id = null, classes = [] } = {}) {
    const el = document.createElement(type);
    if (text) el.textContent = text;
    if (id !== null) el.id = id;
    classes.forEach(cls => el.classList.add(cls));
    return el;
}

function renderTask(task, index) {
    const li = createElement('li');
    
    const taskName = createElement('span', { text: task });
    const deleteBtn = createElement('span', {
        text: 'done',
        id: index,
        classes: ['delete-button', 'text-success', 'text-decoration-underline']
    });
    deleteBtn.role = 'button';

    li.append(taskName, deleteBtn);
    taskListElement.appendChild(li);
}

function renderAllTasks() {
    taskListElement.innerHTML = '';
    tasks.forEach((task, i) => renderTask(task, i));
}

function addTask() {
    const task = taskInput.value.trim();
    if (task === '') return;

    tasks.push(task);
    renderTask(task, tasks.length - 1);
    taskInput.value = ''; 
}

function deleteTask(id) {
    const index = parseInt(id, 10);
    if (!isNaN(index)) {
        tasks.splice(index, 1);
        renderAllTasks();
    }
}

taskListElement.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-button')) {
        deleteTask(event.target.id);
    }
});

addButton.addEventListener('click', addTask);
