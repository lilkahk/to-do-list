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
        displayOptionTasks(text);
    })

    return div;
}