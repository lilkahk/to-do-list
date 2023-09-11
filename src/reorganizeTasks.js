import { isBefore, parseISO } from "date-fns"

// reorganizeTasks(arr) takes an array of tasks, arr, and organizes them according
//   to their due date, with the earliest first
export default function reorganizeTasks(arr) {
    return arr.sort((a, b) => {
        const aDate = parseISO(a.due),
            bDate = parseISO(b.due);

        if (aDate === 'Anytime' && bDate !== 'Anytime') {
            return 1;
        } else if (aDate === 'Anytime' || bDate === 'Anytime') {
            return -1;
        } else {
            return isBefore(aDate, bDate) ? -1 : 1;
        }
    })
}
