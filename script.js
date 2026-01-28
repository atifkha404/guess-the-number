let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const restartBtn = document.getElementById('restartBtn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const card = document.querySelector('.card');

function updateAttempts() {
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
}

function checkGuess() {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        feedback.textContent = 'Please enter a number between 1 and 100';
        feedback.className = 'feedback';
        return;
    }
    updateAttempts();
    if (guess === targetNumber) {
        feedback.textContent = 'Correct! 🎉';
        feedback.className = 'feedback correct';
        checkBtn.disabled = true;
    } else if (guess > targetNumber) {
        feedback.textContent = 'Too High';
        feedback.className = 'feedback too-high';
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 500);
    } else {
        feedback.textContent = 'Too Low';
        feedback.className = 'feedback too-low';
        card.classList.add('shake');
        setTimeout(() => card.classList.remove('shake'), 500);
    }
    guessInput.value = '';
}

function restartGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = 'Attempts: 0';
    feedback.textContent = '';
    feedback.className = 'feedback';
    checkBtn.disabled = false;
    guessInput.value = '';
}

checkBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', restartGame);
guessInput.addEventListener('input', () => {
    checkBtn.disabled = guessInput.value.trim() === '';
});
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});