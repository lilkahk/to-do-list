const MAX_XP = 2000;

// difficulty: [1, 5] : difficulty * 20
// time: [0, 10] 1 + (time ** 2) / 10
export default function reward(difficulty, time) {
    // How much xp should be earned
    const xpEarned = Math.floor(difficulty * 20 * (1 + (time ** 2) / 10))
    const progressBar = document.querySelector('.progress');

}