import { MAX_XP } from "./reward";

export default function displayProgress() {
    const progressBar = document.querySelector('.progress');
    progressBar.style.setProperty('--width', (parseInt(localStorage.getItem('xp')) / MAX_XP * 99));
}