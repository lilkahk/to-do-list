import './displayNewTask.css'
import chooseTextColor from './chooseTextColor';
import { isToday, parseISO, differenceInDays, startOfDay, isBefore } from 'date-fns';
import displayTasks from './displayTasks';
import reward from './reward';

export default function displayNewTask(obj) {
    // Get main div
    const mainDiv = document.querySelector('.content-main');

    // Create task display
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-display-main')

    // Name
    const taskName = document.createElement('h2');
    taskName.textContent = obj.name;
    taskDiv.appendChild(taskName);

    // Color of container
    // Get project in local storage
    const storageProj = localStorage.getItem(obj['project id']);
    const containerColor = (JSON.parse(storageProj)).color;
    taskDiv.style.backgroundColor = containerColor;

    // Text color
    if (obj.project === 'All Tasks') {
        taskDiv.style.color = 'black';
    } else {
        taskDiv.style.color = chooseTextColor(containerColor);
    }

    // Due date
    const startOfToday = startOfDay(new Date());
    const taskDate = document.createElement('h4');
    if (obj.due === 'Anytime') {
    } else {
        const dueDate = parseISO(obj.due);
        const diffDays = differenceInDays(dueDate, startOfToday);
        const before = isBefore(dueDate, startOfToday);
        if (isToday(dueDate)) {
            taskDate.textContent = 'Today';
        } else if (diffDays === 1) {
            if (before) {
                taskDate.textContent = 'Due 1 Day Ago';
            } else {
                taskDate.textContent = 'In 1 Day';
            }
        } else if (diffDays < 7) {
            if (before) {
                taskDate.textContent = `Due ${diffDays} Days Ago`;
            } else {
                taskDate.textContent = `In ${diffDays} Days`;
            }
        } else if (diffDays < 28) {
            const weeksFromNow = Math.floor(diffDays / 7);
            const withOrWithoutS = weeksFromNow === 1 ? 'Week' : 'Weeks';
            if (before) {
                taskDate.textContent = `Due ${weeksFromNow} ${withOrWithoutS} Ago`;
            } else {
                taskDate.textContent = `In ${weeksFromNow} ${withOrWithoutS}`;
            }
        } else if (diffDays < 365) {
            const monthsFromNow = Math.floor(diffDays / 28);
            const withOrWithoutS = monthsFromNow === 1 ? 'Month' : 'Months';
            if (before) {
                taskDate.textContent = `Due ${monthsFromNow} ${withOrWithoutS} Ago`;
            } else {
                taskDate.textContent = `In ${monthsFromNow} ${withOrWithoutS}`;
            }
        } else {
            const yearsFromNow = Math.floor(diffDays / 365);
            const withOrWithoutS = yearsFromNow === 1 ? 'Year' : 'Years';
            if (before) {
                taskDate.textContent = `Due ${yearsFromNow} ${withOrWithoutS} Ago`;
            } else {
                taskDate.textContent = `In ${yearsFromNow} ${withOrWithoutS}`;
            }
        }
        taskDiv.appendChild(taskDate);
    }

    taskDiv.addEventListener('click', function() {
        // Get side
        const side = document.querySelector('.content-notes');
        // Clear old
        side.innerHTML = '';
        const sideDiv = document.createElement('div');
        sideDiv.classList.add('side-div');

        // Name of task
        const taskName = document.createElement('h2');
        taskName.textContent = `${obj.project} - ${obj.name}`;
        sideDiv.appendChild(taskName);

        // Due date
        const dueDate = document.createElement('div');
        const dueTitle = document.createElement('h4');
        dueTitle.textContent = `Due ${taskDate.textContent} `
        dueDate.appendChild(dueTitle);
        const date = document.createElement('p');
        date.textContent = `(${obj.due})`;
        dueDate.appendChild(date);
        sideDiv.appendChild(dueDate);

        // Estimated time
        const estimatedTime = document.createElement('h4');
        const possibleTimesArr = ['< 15 min', '15-30 min', '30 min - 1h', '1h - 2h', 
            '2h - 4h', '4h - 8h', '8h - 24h', '1 day - 2 days', '2 days - 4 days', 
            '4 days - 1 week', '> 1 week'];
        estimatedTime.textContent = `Takes Approximately ${obj.time}`;
        for (let i = 0; i < possibleTimesArr.length; i++) {
            if (obj.time === possibleTimesArr[i]) {
                estimatedTime.setAttribute('value', i);
                break;
            }
        }
        sideDiv.appendChild(estimatedTime);

        // Difficulty
        const difficultyDiv = document.createElement('div');
        difficultyDiv.classList.add('difficulty-div');
        const difficultyTitle = document.createElement('h4');
        const starContainer = document.createElement('div');
        starContainer.classList.add('star-container-notes')
        difficultyTitle.textContent = 'Difficulty:';
        difficultyDiv.appendChild(difficultyTitle);
        // Define star
        const star = document.createElement('svg');
        star.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>'
        star.style.fill = 'gold';
        star.classList.add('task-modal-stars');
        for (let i = 0; i < parseInt(obj.difficulty); i++) {
            const clonedStar = star.cloneNode(true);
            starContainer.appendChild(clonedStar);
        }
        difficultyDiv.setAttribute('difficulty', obj.difficulty);
        difficultyDiv.appendChild(starContainer);
        sideDiv.appendChild(difficultyDiv);

        // Notes
        if (obj.notes !== '') {
            const notesDiv = document.createElement('div'),
            notesTitle = document.createElement('h4'),
            notesNotes = document.createElement('p');
        
        notesTitle.textContent = 'Notes:';
        notesDiv.appendChild(notesTitle);

        notesNotes.classList.add('notes-notes');
        notesNotes.textContent = obj.notes;
        notesDiv.appendChild(notesNotes);

        sideDiv.appendChild(notesDiv);
        }
    
        // Finished
        const finsihedDiv = document.createElement('div');
        finsihedDiv.classList.add('finished-task-div');
        finsihedDiv.textContent = 'Task Finished';
        // Get difficulty and time
        const difficulty = difficultyDiv.getAttribute('difficulty');
        const time = estimatedTime.getAttribute('value');
        finsihedDiv.addEventListener('click', function() {
            reward(difficulty, time);
        })
        sideDiv.appendChild(finsihedDiv);

        // Delete
        const deleteTask = document.createElement('div');
        deleteTask.classList.add('delete-task-div');
        deleteTask.textContent = 'Delete Task';
        
        deleteTask.addEventListener('click', function() {
            // Remove sideNote display
            sideDiv.remove();
            // Remove from storage
            const projId = obj['project id'];
            const taskId = obj.id; 
            removeTask(projId, taskId);
            // Refresh
            const mainDiv = document.querySelector('.main-div-title');
            const displayName = mainDiv.textContent;
            displayTasks(mainDiv.id, displayName);
        })
        sideDiv.appendChild(deleteTask);

        side.appendChild(sideDiv);
    })

    mainDiv.appendChild(taskDiv);
}

function removeTask(projId, taskId) {
    // Delete from specific project
    const storedProject = JSON.parse(localStorage.getItem(projId));
    const tasks = storedProject.tasks;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === taskId) {
            tasks.splice(i, 1);
        }
    }
    localStorage.setItem(projId, JSON.stringify(storedProject));

    if (projId !== 'all-project') {
        const allProject = JSON.parse(localStorage.getItem('all-project'));
        const allTasks = allProject.tasks;
        for (let i = 0; i < allTasks.length; i++) {
            if (allTasks[i].id === taskId) {
                allTasks.splice(i, 1);
            }
        }
        localStorage.setItem('all-project', JSON.stringify(allProject));
    }
}