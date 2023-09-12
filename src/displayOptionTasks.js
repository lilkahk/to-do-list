import { startOfDay, isToday, parseISO, isBefore, differenceInDays } from "date-fns";
import displayNewTask from "./displayNewTask";

export default function displayOptionTasks(optionName) {
    // Get tasks from 'all-project'
    const tasks = (JSON.parse(localStorage.getItem('all-project'))).tasks;
    const today = startOfDay(new Date());
    const optionArr = [];

    if (optionName === 'Today') {
        for (let i = 0; i < tasks.length; i++) {
            if (isToday(parseISO(tasks[i].due))) {
                optionArr.push(tasks[i]);
            }
        }
    } else if (optionName === 'Upcoming') {
        for (let i = 0; i < tasks.length; i++) {
            if (isBefore(parseISO(tasks[i].due), today)) continue;
            const diffDays = differenceInDays(today, parseISO(tasks[i].due));
            if (diffDays <= 3) optionArr.push(tasks[i]);
        }
    } else if (optionName === 'Far Away') {
        for (let i = 0; i < tasks.length; i++) {
            if (isBefore(parseISO(tasks[i].due), today)) continue;
            const diffDays = differenceInDays(today, parseISO(tasks[i].due));
            if (diffDays > 3) optionArr.push(tasks[i]);
        }
    } else {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].due === 'Anytime') optionArr.push(tasks[i]);
        }
    }

    const displayArea = document.querySelector('.content-main');
    displayArea.innerHTML = '';
    const areaTitle = document.createElement('h1');
    areaTitle.classList.add('main-div-title');
    areaTitle.textContent = optionName;
    displayArea.appendChild(areaTitle);
    for (let i = 0; i < optionArr.length; i++) {
        displayNewTask(optionArr[i]);
    }
}