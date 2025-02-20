let tasks = [];

const tambahTask = () => {
    const taskInput = document.getElementById("taskInput")
    const text = taskInput.value.trim()

    if (text) {
        tasks.push({
            text: text,
            completed: false
        });
    }

    updateTaskList()
};

const updateTaskList = ()=> {
    const taskList = document.getElementById("task-list")
    taskList.innerHTML = ''

    tasks.forEach((task, index )=> {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
        <div class="taskItem">
            <div class="task ${task.completed ? 'completed' : ''}">
                <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}/>
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <img src="./asset/img/edit.png" onClick="editTask(${index})" />
                <img src="./asset/img/bin.png" onClick="deleteTask(${index})" />
            </div>
        </div>
        `;
        
        listItem.addEventListener('change', ()=> toggleTaskCompleted(index));
        taskList.append(listItem);
    });
};

document.getElementById("taskBaru").addEventListener("click", function(e) { 
    e.preventDefault()

    tambahTask()
 });