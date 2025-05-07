const add = document.getElementById("add");

let tasks = [];
let taskNumber = 0;
const aclist = document.getElementById("task-list");

function createTaskElement(elementType, text = '', id = null, classNames = []) {
    const elem = document.createElement(elementType);
    if (text != '') {
        const elemText = document.createTextNode(text);
        elem.appendChild(elemText);
    }
    if (id != null)  {
        elem.id = id;
    };
    if (classNames.length > 0) {
        for (let c in classNames) {
            elem.classList.add(classNames[c]);
        }
    }

    return elem;
}

function createTasksList(task, taskId) {
    const taskListElem = createTaskElement('li', '', taskId);
    const taskNameSpan = createTaskElement('span', task);
    const taskDeleteSpan = createTaskElement('span','delete',taskId, ['delete-button', 'text-danger', 'text-decoration-underline']);

    taskListElem.appendChild(taskNameSpan);
    taskListElem.appendChild(taskDeleteSpan);
    taskDeleteSpan.role = 'button';
    aclist.appendChild(taskListElem);
}

function removeTaskList(taskId) {

}

function syncTaskList() {
    aclist.textContent = '';
    for (let i = 0; i < tasks.length; i++) {
        createTasksList(tasks[i], i);
    }
}

function addTask() {
    const task = document.getElementById("task").value;
    tasks.push(task);

    createTasksList(task, taskNumber, aclist);
    taskNumber++;
}

function deleteTask(id) {
    tasks.splice(id, 1);
    syncTaskList();
}

aclist.addEventListener('click', (event) => {
    if (event.target.tagName = 'BUTTON') {
        deleteTask(event.target.id);
    }
})
add.addEventListener('click', addTask);