import './header.css'

export default function createHeader() {
    // Define
    const header = document.createElement('header');
    header.classList.add('header');

    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = 'Welcome Back!';
    header.appendChild(welcomeMessage);

    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-container');
    // Current Level
    const currentLevel = document.createElement('h3');
    currentLevel.textContent = 'LVL 0';
    progressContainer.appendChild(currentLevel);
    // Bar
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress');
    progressContainer.appendChild(progressBar);
    // Next Level
    const nextLevel = document.createElement('h3');
    nextLevel.textContent = 'LVL 1';
    progressContainer.appendChild(nextLevel);

    header.appendChild(progressContainer);

    return header;
}