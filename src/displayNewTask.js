import './displayNewTask.css'
import chooseTextColor from './chooseTextColor';
import { isToday, parseISO, differenceInDays, startOfDay } from 'date-fns';

export default function displayNewTask(obj) {
    console.log(obj);
    let today = false,
        upcoming = false,
        far = false,
        anytime = false;
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
        anytime = true;
    } else {
        const dueDate = parseISO(obj.due);
        const diffDays = differenceInDays(dueDate, startOfToday);
        if (isToday(dueDate)) {
            taskDate.textContent = 'Today';
            today = true;
        } else if (diffDays === 1) {
            taskDate.textContent = 'In 1 Day';
            upcoming = true;
        } else if (diffDays < 7) {
            taskDate.textContent = `In ${diffDays} Days`;
            upcoming = true;
        } else if (diffDays < 28) {
            const weeksFromNow = Math.floor(diffDays / 7);
            taskDate.textContent = `In ${weeksFromNow} Weeks`;
            far = true;
        } else if (diffDays < 365) {
            const monthsFromNow = Math.floor(diffDays / 28);
            taskDate.textContent = `In ${monthsFromNow} Months`;
            far = true;
        } else {
            const yearsFromNow = Math.floor(diffDays / 365);
            taskDate.textContent = `In ${yearsFromNow} Years`;
            far = true;
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
        estimatedTime.textContent = `Takes Approximately ${obj.time}`;
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
        difficultyDiv.appendChild(starContainer);
        sideDiv.appendChild(difficultyDiv);

        // Notes
        const notesDiv = document.createElement('div'),
            notesTitle = document.createElement('h4'),
            notesNotes = document.createElement('p');
        
        notesTitle.textContent = 'Notes:';
        notesDiv.appendChild(notesTitle);

        notesNotes.classList.add('notes-notes');
        notesNotes.textContent = obj.notes;
        notesDiv.appendChild(notesNotes);

        sideDiv.appendChild(notesDiv);

        // Finished
        const finsihedDiv = document.createElement('div');
        finsihedDiv.classList.add('finished-task-div');
        finsihedDiv.textContent = 'Task Finished';
        sideDiv.appendChild(finsihedDiv);

        // Delete
        const deleteTask = document.createElement('div');
        deleteTask.classList.add('delete-task-div');
        deleteTask.textContent = 'Delete Task';
        sideDiv.appendChild(deleteTask);

        side.appendChild(sideDiv);
    })
    

    mainDiv.appendChild(taskDiv);
}