import { add, endOfISOWeek } from 'date-fns';
import './content.css'
import addTaskModal from './addTaskModal';

export default function createContent () {
    // Define
    const content = document.createElement('div');
    content.classList.add('content');

    content.appendChild(createSide());
    content.appendChild(createMain());

    const contentNotes = document.createElement('div');
    contentNotes.classList.add('content-notes');
    content.appendChild(contentNotes);

    return content;
}

function createSide() {
    const contentSide = document.createElement('div');
    contentSide.classList.add('content-side');
    const addTaskText = document.createElement('p');
    addTaskText.textContent = 'Add Task +';

    addTaskText.addEventListener('click', function() {
        const modal = addTaskModal();
        contentSide.appendChild(modal);
        modal.classList.add('open-modal');
        modal.showModal()
    })

    contentSide.appendChild(addTaskText);

    return contentSide;
}

function createMain() {
    const contentMain = document.createElement('div');
    contentMain.classList.add('content-main');

    // Load tasks
    

    return contentMain;
}