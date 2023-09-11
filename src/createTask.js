let numTasks = 0;
// createTask(arr) creates a task object
// requirements: arr[0] is the project,
//               arr[1] is the id of the project
//               arr[2] is the name of the task
//               arr[3] is the time
//               arr[4] is the difficulty
//               arr[5] is the due date
//               arr[6] is the notes
export default function createTask(arr) {
    numTasks++;
    return {
        project: arr[0],
        'project id': arr[1],
        name: arr[2],
        time: arr[3],
        difficulty: arr[4],
        due: arr[5],
        notes: arr[6],
        id: numTasks
    };
}