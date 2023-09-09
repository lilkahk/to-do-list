import './sidebar.css'
import chooseTextColor from './chooseTextColor';

export default function createSidebar() {
    // Creation
    const sideBar = document.createElement('div');
    sideBar.classList.add('sidebar');

    // Upper block
    const defaultOptions = document.createElement('div');
    defaultOptions.classList.add('default-options');


    const today = document.createElement('div');
    // Add the icon to it
    const todayIcon = document.createElement('svg');
    todayIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>'
    todayIcon.style.fill = 'gold';
    today.appendChild(todayIcon);
    // Text
    const todayText = document.createElement('p');
    todayText.textContent = 'Today';
    today.appendChild(todayText);
    // Add to container
    defaultOptions.appendChild(today);


    const upcoming = document.createElement('div');
    // Add the icon to it
    const upcomingIcon = document.createElement('svg');
    upcomingIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-clock</title><path d="M15,13H16.5V15.82L18.94,17.23L18.19,18.53L15,16.69V13M19,8H5V19H9.67C9.24,18.09 9,17.07 9,16A7,7 0 0,1 16,9C17.07,9 18.09,9.24 19,9.67V8M5,21C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1H8V3H16V1H18V3H19A2,2 0 0,1 21,5V11.1C22.24,12.36 23,14.09 23,16A7,7 0 0,1 16,23C14.09,23 12.36,22.24 11.1,21H5M16,11.15A4.85,4.85 0 0,0 11.15,16C11.15,18.68 13.32,20.85 16,20.85A4.85,4.85 0 0,0 20.85,16C20.85,13.32 18.68,11.15 16,11.15Z" /></svg>'
    upcomingIcon.style.fill = "rgb(110, 7, 7)";
    upcoming.appendChild(upcomingIcon);
    // Text
    const upcomingText = document.createElement('p');
    upcomingText.textContent = 'Upcoming';
    upcoming.appendChild(upcomingText);
    // Add to container
    defaultOptions.appendChild(upcoming);


    const anytime = document.createElement('div');
    // Add the icon to it
    const anytimeIcon = document.createElement('svg');
    anytimeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bookshelf</title><path d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z" /></svg>'
    anytimeIcon.style.fill = 'rgb(11, 89, 11)';
    anytime.appendChild(anytimeIcon);
    // Text
    const anytimeText = document.createElement('p');
    anytimeText.textContent = 'Anytime';
    anytime.appendChild(anytimeText);
    // Add to container
    defaultOptions.appendChild(anytime);

    sideBar.appendChild(defaultOptions);


    // Projects
    const projects = document.createElement('div');
    projects.classList.add('projects');
    // Title
    const projectsTitle = document.createElement('div');
    projectsTitle.classList.add('projects-title');
    // Title Text
    const projectsTitleText = document.createElement('h4');
    projectsTitleText.textContent = 'Projects/Events';
    projectsTitle.appendChild(projectsTitleText);
    // Title Icon
    const addProject = document.createElement('button');
    addProject.id = 'add-project';
    addProject.textContent = '+';
    let open = true;


    addProject.addEventListener('click', function() {
        open = !open;
        if (open) {
            open = false;
            return;
        }
        const newProjectDiv = document.createElement('div');
        newProjectDiv.classList.add('new-project-div');

        const projectName = document.createElement('input');
        projectName.setAttribute('placeholder', 'Project Name');
        newProjectDiv.appendChild(projectName);

        const colorPicker = document.createElement('input');
        colorPicker.classList.add('color-picker');
        colorPicker.setAttribute('type', 'color');
        newProjectDiv.appendChild(colorPicker);

        const checkmark = document.createElement('svg');
        checkmark.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>'
        checkmark.style.fill = 'green';

        const close = document.createElement('div');
        close.classList.add('close-button');
        close.textContent = 'x';


        const count = localStorage.getItem('projCount');
        let projCount = count ? parseInt(count, 10) : 0;

        checkmark.addEventListener('click', function() {
            const name = projectName.value;
            if (name.length < 1) {
                projectName.setAttribute('placeholder', 'Enter a name');
                return;
            }
            const color = colorPicker.value;
            projects.removeChild(newProjectDiv);

            const newProjectData = {
                name: name,
                color: color,
                id: projCount,
            };

            const newProj = createProject(newProjectData, projCount);
            projects.appendChild(newProj);

            localStorage.setItem(`Project ${projCount}`, JSON.stringify(newProjectData));

            // Increment projCount and store it in localStorage
            projCount++;
            localStorage.setItem('projCount', projCount);

            open = true;
        });

        close.addEventListener('click', function() {
            (this.parentElement).remove();
            open = true;
        })

        newProjectDiv.appendChild(checkmark);
        newProjectDiv.appendChild(close);
        projects.appendChild(newProjectDiv);
    })

    projectsTitle.appendChild(addProject);

    projects.appendChild(projectsTitle);

    // Add all project
    projects.appendChild(createAllProject());

    // Load stored projects
    if ((localStorage.getItem(`Project 0`))) {
        let i = 0;
        while ((localStorage.getItem(`Project ${i}`))) {
            const projObj = JSON.parse(localStorage.getItem(`Project ${i}`));
            projects.appendChild(createProject(projObj, projObj.id));
            i++;
        }
    }

    sideBar.appendChild(projects);

    return sideBar;
}

function createProject(data, count) {
    const projectContainer = document.createElement('div'),
          project = document.createElement('div'),
          removeBtn = document.createElement('div');
    // Change Container
    projectContainer.classList.add('project-container');
    projectContainer.id = `Project-${count}`;
    // Show remove button on hover
    projectContainer.addEventListener('mouseover', function() {
        // Show remove button
        const btn = this.lastChild;
        btn.style.display = 'block';
    })
    // Remove button when unhovering
    projectContainer.addEventListener('mouseleave', function() {
        const btn = this.lastChild;
        btn.style.display = 'none';
    })
    // Change Project
    project.classList.add('project');
    project.textContent = data.name;
    project.style.backgroundColor = data.color;
    project.style.color = chooseTextColor(data.color);
    projectContainer.appendChild(project);
    // Change Button
    removeBtn.classList.add('remove-button');
    removeBtn.textContent = 'x';
    removeBtn.addEventListener('click', function() {
        const parent = this.parentElement;
        // Remove item in real time
        parent.remove();
        // Remove item in storage
        localStorage.removeItem(parent.id);
        // Change count
        const currentCount = parseInt(localStorage.getItem('projCount'), 10);
        const parentId = parseInt(parent.id.match(/\d+/)[0], 10);

        let first = true;
        for (let i = parentId + 1; i <= currentCount; i++) {
            // If element is last in the list
            if (i === currentCount && first) {
                localStorage.removeItem(`Project ${i - 1}`);
                break;
            }
            first = false;

            // For any other element

            // Change DOM id's
            const div = document.querySelector(`#Project-${i}`);
            if (div) {
                div.id = `Project-${i - 1}`;
            }

            // Change in local storage
            const nextProjectId = `Project ${i}`;
            let projectData = JSON.parse(localStorage.getItem(nextProjectId));

            if (projectData) {
                projectData.id = i - 1;
                projectData = JSON.stringify(projectData);
                localStorage.setItem(`Project ${i - 1}`, projectData);
                localStorage.removeItem(nextProjectId);
            }
        }
        localStorage.setItem('projCount', Math.max(currentCount - 1, 0));
    })
    projectContainer.appendChild(removeBtn);
    
    return projectContainer;
}

function createAllProject() {
    const projectContainer = document.createElement('div'),
        project = document.createElement('div');

    // Change Container
    projectContainer.classList.add('project-container');
    projectContainer.id = `all-project`;

    // Change Project
    project.classList.add('project');
    project.textContent = 'All Tasks';
    project.style.backgroundColor = 'lightgray';
    project.style.color = 'black'
    projectContainer.appendChild(project);

    return projectContainer;
}
