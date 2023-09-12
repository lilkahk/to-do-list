import displayTasks from "./displayTasks";
import reorganizeTasks from "./reorganizeTasks";

let numTasks = parseInt(localStorage.getItem('numTasks'), 10) || 0;

// createTask(arr) creates a task object
// requirements: arr[0] is the project,
//               arr[1] is the id of the project
//               arr[2] is the name of the task
//               arr[3] is the time
//               arr[4] is the difficulty
//               arr[5] is the due date
//               arr[6] is the notes
export default function createTask(arr) {
    const taskObj = {
        project: arr[0],
        'project id': arr[1],
        name: arr[2],
        time: arr[3],
        difficulty: arr[4],
        due: arr[5],
        notes: arr[6],
        id: numTasks
    };
    numTasks++;
    localStorage.setItem('numTasks', numTasks.toString());
    // Get project from localStorage, add task to project.task array, and sort it
    const storedProj = JSON.parse(localStorage.getItem(taskObj['project id']));
    (storedProj.tasks).push(taskObj);
    reorganizeTasks(storedProj.tasks);
    localStorage.setItem(taskObj['project id'], JSON.stringify(storedProj));

    // Add task to All Tasks project if different
    if (taskObj['project id'] !== 'all-project') {
        const allProject = JSON.parse(localStorage.getItem('all-project'));
        (allProject.tasks).push(taskObj);
        reorganizeTasks(allProject.tasks);
        localStorage.setItem('all-project', JSON.stringify(allProject));
    }
    
    return;
}