import './style.css'
import createSidebar from './sidebar';
import createHeader from './header';
import createContent from './content';

export default function pageLoad() {
    // Get Body
    const body = document.querySelector('body');

    // Sidebar
    body.appendChild(createSidebar());
    // Header
    body.appendChild(createHeader());
    // Content
    body.appendChild(createContent());
}