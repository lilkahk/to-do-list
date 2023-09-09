let numTasks = 0;
// createTask(arr) creates a task object
// requirements: arr[0] is the project,
//               arr[1] is the name of the task
//               arr[2] is the time
//               arr[3] is the difficulty
//               arr[4] is the due date
//               arr[5] is the notes
export default function createTask(arr) {
    numTasks++;
    return {
        project: arr[0],
        name: arr[1],
        time: arr[2],
        difficulty: arr[3],
        due: arr[4],
        notes: arr[5],
        id: numTasks
    };
}