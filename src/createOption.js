import displayOptionTasks from "./displayOptionTasks";

export default function createOption(text, icon) {
    // Create display
    const div = document.createElement('div');
    div.appendChild(icon);
    // Text
    const divText = document.createElement('p');
    divText.textContent = text;
    div.appendChild(divText);

    div.addEventListener('click', function() {
        // Remove sidediv if applicable
        const sideDiv = document.querySelector('.side-div');
        if (sideDiv) sideDiv.remove();
        displayOptionTasks(text);
    })

    return div;
}