const add = document.getElementById("add");

let tasks = [];

function createTaskElement(elementType, text = '', id = null, ...classNames) {
    const elem = document.createElement(elementType);
    if (text != '') {
        const elemText = document.createTextNode(text);
        elem.appendChild(elemText);
    }
    if (id != null) elem.id = id;
    if (classNames.length != 0) {
        console.log("Masuk ke if");
        for (const c in classNames) {
            console.log("Loop! " + c);
            elem.classList.add(c);
        }
    }

    return elem;
}

function createTasksList(task, taskId, aclist) {
    const taskListElem = createTaskElement(elementype = 'li');
    const taskNameSpan = createTaskElement(elementType = 'span', text=task);
    const taskDeleteSpan = createTaskElement(elementType = 'span', text='delete', id=taskId, ['text-danger', 'text-decoration-underline']);

    taskListElem.appendChild(taskNameSpan);
    taskListElem.appendChild(taskDeleteSpan);
    taskDeleteSpan.role = 'button';
    aclist.appendChild(taskListElem);
}

function renderTask(aclist) {
    let taskNumber = 0;

    aclist.innerHTML = '';
    tasks.forEach((a) => {
        console.log("For each array = " + a);
        createTasksList(a, taskNumber, aclist);
        taskNumber++;
    })
}

function addTask() {
    const task = document.getElementById("task").value;
    const aclist = document.getElementById("task-list");

    tasks.push(task);

    renderTask(aclist);
}

function deleteTask() {

}


add.addEventListener('click', addTask);