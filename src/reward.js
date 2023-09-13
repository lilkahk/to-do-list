import displayProgress from "./displayProgress";

export const MAX_XP = 2000;

// difficulty: [1, 5] : difficulty * 20
// time: [0, 10] 1 + (time ** 2) / 10
export default function reward(difficulty, time) {
    // How much xp should be earned
    const xpEarned = Math.floor(difficulty * 20 * (1 + (time ** 2) / 10))
    // Level up?
    const currentXp = parseInt(localStorage.getItem('xp'), 10);
    if (MAX_XP - currentXp > xpEarned) {
        console.log('a');
        localStorage.setItem('xp', Math.floor(currentXp + xpEarned));
    } else {
        console.log('b');
        const currentLvl = parseInt(localStorage.getItem('level'), 10);
        localStorage.setItem('level', currentLvl + 1);
        localStorage.setItem('xp', Math.floor(currentXp + xpEarned - MAX_XP));

        // Update level display
        const level = parseInt(localStorage.getItem('level'));
        const currentLevel = document.querySelector('#current-lvl');
        currentLevel.textContent = `LVL ${level}`;
        const nextLevel = document.querySelector('#next-lvl');
        nextLevel.textContent = `LVL ${level + 1}`;
    }
    // Update xp at bottom of bar
    const bottomXp = document.querySelector('.bottom-xp');
    bottomXp.textContent = `${parseInt(localStorage.getItem('xp'))} / 2000 XP`;

    displayProgress();
}