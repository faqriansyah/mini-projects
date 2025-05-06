const add = document.getElementById("add");

let tasks = [];
const aclist = document.getElementById("task-list");


function createTaskElement(elementType, text = '', id = null, ...classNames) {
    const elem = document.createElement(elementType);
    if (text != '') {
        const elemText = document.createTextNode(text);
        elem.appendChild(elemText);
    }
    if (id != null) elem.id = id;
    if (classNames.length != 0) {
        for (const c in classNames) {
            elem.classList.add(c);
        }
    }

    return elem;
}

function createTasksList(task, taskId) {
    const taskListElem = createTaskElement(elementype = 'li');
    const taskNameSpan = createTaskElement(elementType = 'span', text = task);
    const taskDeleteSpan = createTaskElement(elementType = 'span', text = 'delete', id = taskId, ['text-danger', 'text-decoration-underline']);

    taskListElem.appendChild(taskNameSpan);
    taskListElem.appendChild(taskDeleteSpan);
    taskDeleteSpan.role = 'button';
    aclist.appendChild(taskListElem);
}

function syncTaskList() {
    for (let i = 0; i < tasks.length; i++) {
        createTaskElement(tasks[i], i)
    }
}

function addTask() {
    const task = document.getElementById("task").value;
    let taskNumber = 0;

    tasks.push(task);

    createTasksList(task, taskNumber, aclist);
    taskNumber++;
}

function deleteTask() {

}


add.addEventListener('click', addTask);