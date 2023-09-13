import './style.css'
import createSidebar from './sidebar';
import createHeader from './header';
import createContent from './content';
import displayTasks from './displayTasks';
import displayProgress from './displayProgress';

export default function pageLoad() {
    // Get Body
    const body = document.querySelector('body');

    // Sidebar
    body.appendChild(createSidebar());
    // Header
    body.appendChild(createHeader());
    displayProgress();
    // Content
    body.appendChild(createContent());
    displayTasks('all-project', 'All Tasks');
}