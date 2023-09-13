import { isBefore, parseISO } from "date-fns";
import { ar } from "date-fns/locale";

// reorganizeTasks(arr) takes an array of tasks, arr, and organizes them according
// to their due date, with the earliest first
export default function reorganizeTasks(arr) {
    arr.sort((a, b) => {
        // Check if either a or b has "Anytime" as the due date
        if (a.due === 'Anytime' && b.due === 'Anytime') {
            return 0;
        } else if (a.due === 'Anytime') {
            return 1;
        } else if (b.due === 'Anytime') {
            return -1;
        } else {
            const aDate = parseISO(a.due);
            const bDate = parseISO(b.due);
            return isBefore(aDate, bDate) ? -1 : 1;
        }
    });
}