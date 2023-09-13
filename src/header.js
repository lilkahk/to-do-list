import './header.css'

export default function createHeader() {
    // Define
    const header = document.createElement('header');
    header.classList.add('header');

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    const welcomeMessage = document.createElement('h1');
    welcomeMessage.id = 'welcome-message';
    const username = localStorage.getItem('username');
    if (username) {
        welcomeMessage.textContent = `Welcome Back ${username}`;
    } else {
        welcomeMessage.textContent = 'Welcome Back';
    }
    headerContainer.appendChild(welcomeMessage);

    const progressContainer = document.createElement('div');
    progressContainer.classList.add('progress-container');
    // Current Level
    const currentLevel = document.createElement('h3');
    const lvlValue = parseInt(localStorage.getItem('level'), 10);
    currentLevel.textContent = `LVL ${lvlValue}`;
    progressContainer.appendChild(currentLevel);
    // Bar
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress');
    progressContainer.appendChild(progressBar);
    // Next Level
    const nextLevel = document.createElement('h3');
    nextLevel.textContent = `LVL ${lvlValue + 1}`;
    progressContainer.appendChild(nextLevel);

    headerContainer.appendChild(progressContainer);

    const emptyDiv = document.createElement('div');
    header.appendChild(emptyDiv);
    header.appendChild(headerContainer);

    const userSettings = createUserSettings();
    userSettings.classList.add('user-settings');
    header.appendChild(userSettings);


    return header;
}

function createUserSettings() {
    const settingsContainer = document.createElement('div');
    // Add settings when open
    const modal = createModal();
    settingsContainer.appendChild(modal);
    // Settings icon
    const settings = document.createElement('svg');
    settings.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cog</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>'
    // Open up settings
    settings.addEventListener('click', function() {
        modal.classList.remove('modal-close');
        modal.classList.add('modal-open');
        modal.showModal();
    })

    settingsContainer.appendChild(settings);

    return settingsContainer
}

function createModal() {
    const modal = document.createElement('dialog');

    const title = document.createElement('h3');
    title.textContent = 'Settings';
    modal.appendChild(title);

    const inputs = document.createElement('div');
    inputs.classList.add('inputs')
    const nameInputContainer = document.createElement('div');
    nameInputContainer.classList.add('name-input-container');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name';
    nameLabel.setAttribute('for', 'name-input');
    modal.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.id = 'name-input';
    nameInput.setAttribute('placeholder', 'Name');
    modal.appendChild(nameInput);

    nameInputContainer.appendChild(nameLabel);
    nameInputContainer.appendChild(nameInput);

    inputs.appendChild(nameInputContainer);
    modal.appendChild(inputs);

    // Finish buttons
    const finishBtns = document.createElement('div');
    finishBtns.classList.add('finish');
    // Save Button
    const saveChanges = document.createElement('div');
    saveChanges.classList.add('save');
    saveChanges.textContent = 'Save';
    // When clicked
    saveChanges.addEventListener('click', function() {
        const name = nameInput.value;
        if (name.length < 1) {
            nameInput.setAttribute('placeholder', 'Write Your Name');
            return;
        } 
        modal.classList.remove('modal-open');
        modal.classList.add('modal-close');
        // Change in real-time
        const message = document.querySelector('#welcome-message');
        message.textContent = `Welcome Back ${name}`;
        modal.close();
        localStorage.setItem('username', name);
    })
    // Discard Button
    const discardChanges = document.createElement('div');
    discardChanges.classList.add('discard');
    discardChanges.textContent = 'Close';
    discardChanges.addEventListener('click', function() {
        // Remove reset if needed
        const reset = document.querySelector('.confirm-reset');
        if (reset) reset.remove();
        modal.classList.remove('modal-open');
        modal.classList.add('modal-close');
        modal.close();
    })

    // Reset app

    const resetApp = document.createElement('div');
    resetApp.classList.add('reset');
    resetApp.textContent = 'Reset App';
    resetApp.addEventListener('click', function() {
        // Ask for confirmation
        const confirmReset = document.createElement('div'),
            confirmResetText = document.createElement('h5'),
            confirmResetBtn = document.createElement('div');
        confirmResetText.textContent = 'This change is permanent, click to confirm:';
        confirmResetBtn.textContent = 'Reset';

        confirmReset.appendChild(confirmResetText);
        confirmReset.appendChild(confirmResetBtn);
        confirmReset.classList.add('confirm-reset');

        // If clicked
        confirmResetBtn.addEventListener('click', function() {
            localStorage.clear();
            window.location.reload();
        })
        modal.appendChild(confirmReset);
    })

    finishBtns.appendChild(saveChanges);
    finishBtns.appendChild(discardChanges);
    finishBtns.appendChild(resetApp);

    modal.appendChild(finishBtns);

    return modal;
}