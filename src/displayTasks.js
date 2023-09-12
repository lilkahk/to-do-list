import displayNewTask from "./displayNewTask";
import './displayTasks.css'

export default function displayTasks(projName, displayName) {
    const tasks = (JSON.parse(localStorage.getItem(projName))).tasks;
    const displayArea = document.querySelector('.content-main');
    displayArea.innerHTML = '';
    const areaTitle = document.createElement('h1');
    areaTitle.classList.add('main-div-title');
    areaTitle.id = projName;
    areaTitle.textContent = displayName;
    displayArea.appendChild(areaTitle);
    for (let i = 0; i < tasks.length; i++) {
        displayNewTask(tasks[i]);
    }
}