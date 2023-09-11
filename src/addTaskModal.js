import createTask from "./createTask";
import displayNewTask from "./displayNewTask";
import { sub } from 'date-fns';

export default function addTaskModal() {
    const modal = document.createElement('dialog');
    // Add a title
    const titleDiv = document.createElement('div');
    const title = document.createElement('h3');
    title.textContent = 'Create a Task';
    titleDiv.appendChild(title);
    modal.appendChild(titleDiv);

    // Pick a project/event
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('tasks-project-container');
    projectContainer.textContent = 'Pick a Project/Event:';

    const projects = document.createElement('div');
    projects.classList.add('tasks-projects');
    const projectsArr = [...(document.querySelectorAll('.project'))];
    for (let i = 0; i < projectsArr.length; i++) {
        const style = window.getComputedStyle(projectsArr[i])
        // Create a small icon for each project to select when opening modal
        const container = document.createElement('input');
        container.setAttribute('type', 'radio');
        container.setAttribute('value', projectsArr[i].textContent);
        container.setAttribute('name', 'projects-radio');
        container.id = projectsArr[i].textContent;
        container.classList.add('project-icon');

        const containerLabel = document.createElement('label');
        containerLabel.setAttribute('for', container.id);
        containerLabel.textContent = container.id;
        containerLabel.classList.add('projects-icon-label');
        containerLabel.style.backgroundColor = style.backgroundColor;
        containerLabel.style.color = style.color;
        containerLabel.id = projectsArr[i].parentElement.id;

        projects.appendChild(container);
        projects.appendChild(containerLabel);

    }
    projectContainer.appendChild(projects);
    modal.appendChild(projectContainer);


    // Name of task

    const nameInputContainer = document.createElement('div'),
          taskNameInput = document.createElement('input'),
          taskNameLabel = document.createElement('label');
    nameInputContainer.classList.add('name-input-container');
    taskNameInput.classList.add('tasks-modal-inputs');
    taskNameInput.setAttribute('placeholder', 'Name of the task');
    taskNameInput.id = 'task-name-input';
    taskNameLabel.setAttribute('for', taskNameInput.id);
    taskNameLabel.textContent = 'Task Name:'

    nameInputContainer.appendChild(taskNameLabel);
    nameInputContainer.appendChild(taskNameInput);

    modal.appendChild(nameInputContainer);


    // Choose estimated time

    const timeInputContainter = document.createElement('div'),
          taskTimeInput = document.createElement('select'),
          taskTimeLabel = document.createElement('label');
    
    taskTimeInput.id = 'task-time-input';
    // Set options
    const less15 = document.createElement('option');
    less15.textContent = '< 15 min';
    taskTimeInput.appendChild(less15);

    const fifteen30 = document.createElement('option');
    fifteen30.textContent = '15-30 min';
    taskTimeInput.appendChild(fifteen30);

    const thirty1h = document.createElement('option');
    thirty1h.textContent = '30 min - 1h';
    taskTimeInput.appendChild(thirty1h);

    const onehtwoh = document.createElement('option');
    onehtwoh.textContent = '1h - 2h';
    taskTimeInput.appendChild(onehtwoh);

    const twoh4h = document.createElement('option');
    twoh4h.textContent = '2h - 4h';
    taskTimeInput.appendChild(twoh4h);

    const fourh8h = document.createElement('option');
    fourh8h.textContent = '4h - 8h';
    taskTimeInput.appendChild(fourh8h);

    const eighth24 = document.createElement('option');
    eighth24.textContent = '8h - 24h';
    taskTimeInput.appendChild(eighth24);

    const oneday2 = document.createElement('option');
    oneday2.textContent = '1 day - 2 days';
    taskTimeInput.appendChild(oneday2);

    const twoday4 = document.createElement('option');
    twoday4.textContent = '2 days - 4 days';
    taskTimeInput.appendChild(twoday4);

    const fourdayweek = document.createElement('option');
    fourdayweek.textContent = '4 days - 1 week';
    taskTimeInput.appendChild(fourdayweek);

    const weekmore = document.createElement('option');
    weekmore.textContent = '> 1 week';
    taskTimeInput.appendChild(weekmore);

    // taskTimeLabel.setAttribute('for', taskTimeInput.id);
    taskTimeLabel.textContent = 'Estimated Time to Complete Task:';

    timeInputContainter.appendChild(taskTimeLabel);
    timeInputContainter.appendChild(taskTimeInput);

    modal.appendChild(timeInputContainter);


    // Set difficulty of task

    const difficultyContainer = document.createElement('div'),
          difficultyLabel = document.createElement('label'),
          difficultyInput = document.createElement('input');

    difficultyInput.setAttribute('type', 'range');
    difficultyInput.setAttribute('min', '1');
    difficultyInput.setAttribute('max', '5');
    difficultyInput.setAttribute('step', '1');
    difficultyInput.setAttribute('list', 'difficulty-list');
    difficultyInput.setAttribute('value', '1');
    difficultyInput.id = 'difficulty-input';

    const difficultyList = document.createElement('datalist');
    difficultyList.id = 'difficulty-list';
    // Options
    const oneStar = document.createElement('option');
    oneStar.value = '1';
    difficultyList.appendChild(oneStar);

    const twoStar = document.createElement('option');
    twoStar.value = '2';
    difficultyList.appendChild(twoStar);

    const threeStar = document.createElement('option');
    threeStar.value = '3';
    difficultyList.appendChild(threeStar);

    const fourStar = document.createElement('option');
    fourStar.value = '4';
    difficultyList.appendChild(fourStar);

    const fifthStar = document.createElement('option');
    fifthStar.value = '5';
    difficultyList.appendChild(fifthStar);

    difficultyLabel.setAttribute('for', 'difficulty-input');
    difficultyLabel.textContent = 'Choose the difficulty of the task:';

    difficultyContainer.appendChild(difficultyLabel);
    difficultyContainer.appendChild(difficultyInput);

    // Define Star
    const star = document.createElement('svg');
    star.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>'
    star.style.fill = 'gold';
    star.classList.add('task-modal-stars');

    const starContainer = document.createElement('div');
    starContainer.classList.add('star-container');
    starContainer.appendChild(star);
    difficultyContainer.appendChild(starContainer);
    modal.classList.add('open-modal-one');


    difficultyInput.addEventListener('input', function() {
        // Clear previous star container
        modal.classList.remove('open-modal-one');
        modal.classList.remove('open-modal-two');
        modal.classList.remove('open-modal-three');
        modal.classList.remove('open-modal-four');
        modal.classList.remove('open-modal-five');
        notesInput.classList.remove('notes-input-one');
        notesInput.classList.remove('notes-input-two');
        notesInput.classList.remove('notes-input-three');
        notesInput.classList.remove('notes-input-four');
        notesInput.classList.remove('notes-input-five');
        const previousStarContainer = document.querySelector('.star-container');
        previousStarContainer.remove();

        const selectedValue = parseInt(difficultyInput.value, 10);
        const starContainer = document.createElement('div');
        starContainer.classList.add('star-container');
        
        for (let i = 0; i < selectedValue; i++) {
            const clonedStar = star.cloneNode(true);
            starContainer.appendChild(clonedStar);
        }
        difficultyContainer.appendChild(starContainer);

        switch (selectedValue) {
            case 1:
                modal.classList.add('open-modal-one');
                notesInput.classList.add('notes-input-one');
                break;
            case 2:
                modal.classList.add('open-modal-two');
                notesInput.classList.add('notes-input-two');
                break;
            case 3:
                modal.classList.add('open-modal-three');
                notesInput.classList.add('notes-input-three');
                break;
            case 4:
                modal.classList.add('open-modal-four');
                notesInput.classList.add('notes-input-four');
                break;
            case 5:
                modal.classList.add('open-modal-five');
                notesInput.classList.add('notes-input-five');
                break;
        }
    })

    modal.appendChild(difficultyContainer);


    // Choose due date

    const dueDateContainer = document.createElement('div'),
          dueDateInput = document.createElement('input'),
          dueDateLabel = document.createElement('label');


    const yesterday = sub(new Date(), {days: 1});    
    dueDateInput.setAttribute('min', yesterday.toISOString().split('T')[0]);
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.id = 'due-date-input';
    dueDateLabel.setAttribute('for', dueDateInput.id);
    dueDateLabel.textContent = 'Due Date of Task:';

    dueDateContainer.appendChild(dueDateLabel);
    dueDateContainer.appendChild(dueDateInput);

    const anytimeLabel = document.createElement('label'),
          anytimeInput = document.createElement('input'),
          or = document.createElement('p');

    anytimeInput.setAttribute('type', 'checkbox');
    anytimeInput.id = 'anytime-checkbox';
    anytimeLabel.setAttribute('for', anytimeInput.id);
    anytimeLabel.textContent = 'Anytime:';
    or.textContent = 'or';

    dueDateContainer.appendChild(or);
    dueDateContainer.appendChild(anytimeLabel);
    dueDateContainer.appendChild(anytimeInput);

    modal.appendChild(dueDateContainer);

    dueDateInput.addEventListener('input', function () {
        if (dueDateInput.value) {
            anytimeInput.checked = false;
        }
      });
      
      anytimeInput.addEventListener('input', function () {
        if (anytimeInput.checked) {
          dueDateInput.value = '';
        }
      });


    // Add notes

    const notesContainer = document.createElement('div'),
          notesInput = document.createElement('textarea'),
          notesLabel = document.createElement('label');
    
    notesInput.setAttribute('placeholder', 'Add optional notes');
    notesInput.id = 'notes-input'
    notesInput.classList.add('notes-input-one');
    notesLabel.setAttribute('for', notesInput.id);
    notesLabel.textContent = 'Optional Notes:';

    notesContainer.appendChild(notesLabel);
    notesContainer.appendChild(notesInput);
    
    modal.appendChild(notesContainer);


    // Confirm Task

    const confirmContainer = document.createElement('div'),
          confirmDiv = document.createElement('div'),
          discardDiv = document.createElement('div');

    const confirmTaskText = document.createElement('p');
    confirmTaskText.textContent = 'Create task';
    confirmTaskText.classList.add('confirm-task-modal');
    const originalColor = projectContainer.style.color;
    confirmTaskText.addEventListener('click', function() {
        // Check if inputs are valid
        const inputArr = [];
        let requirements = true;
        // Project selector
        const selectedRadio = document.querySelector('input[name="projects-radio"]:checked');
        if (!selectedRadio) {
            projectContainer.style.color = 'red';
            requirements = false;
        } else {
            projectContainer.style.color = originalColor;
        }
        // Name input
        const nameValue = taskNameInput.value;
        if (nameValue.length < 1) {
            nameInputContainer.style.color = 'red';
            requirements = false;
        } else {
            nameInputContainer.style.color = originalColor;
        }
        // Date input
        const dateInput = dueDateInput.value;
        const anytimeCheckboxInput = anytimeInput.checked;
        if (!dateInput && !anytimeCheckboxInput) {
            dueDateContainer.style.color = 'red';
            requirements = false;
        }

        // Close modal
        if (requirements) {
            // Get project id
            const selectedLabel = selectedRadio.nextSibling;
            const hyphenatedId = selectedLabel.id;

            // Add inputs to arr
            inputArr.push(selectedRadio.value);
            // Project id
            if (hyphenatedId === 'all-project') {
                inputArr.push(hyphenatedId);
            } else {
                inputArr.push(hyphenatedId.replace('-', ' '));
            }
            inputArr.push(taskNameInput.value);
            inputArr.push(taskTimeInput.value);
            inputArr.push(difficultyInput.value);
            if (dateInput) {
                inputArr.push(dateInput);
            } else {
                inputArr.push('Anytime');
            }
            inputArr.push(notesInput.value);
            // Create Task object
            createTask(inputArr);

            modal.remove();
        } else {
            return;
        }
    })

    const discardTaskText = document.createElement('p');
    discardTaskText.textContent = 'Discard task';
    discardTaskText.classList.add('discard-task-modal');
    discardTaskText.addEventListener('click', function() {
        modal.remove();
    })

    confirmContainer.appendChild(confirmTaskText);
    confirmContainer.appendChild(discardTaskText);
    confirmContainer.classList.add('confirm-container-modal');

    modal.appendChild(confirmContainer);

    return modal
}