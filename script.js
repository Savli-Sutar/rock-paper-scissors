
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return "It's a tie!";
    
    if (userChoice === "rock") {
        return computerChoice === "paper" ? "The computer won!" : "The user won!";
    }
    if (userChoice === "paper") {
        return computerChoice === "scissors" ? "The computer won!" : "The user won!";
    }
    if (userChoice === "scissors") {
        return computerChoice === "rock" ? "The computer won!" : "The user won!";
    }
};

// 2. DOM Elements
const userDisplay = document.getElementById('user-display');
const computerDisplay = document.getElementById('computer-display');
const winnerText = document.getElementById('winner-text');
const buttons = document.querySelectorAll('.choice-btn');

// 3. Game Logic
const playGame = (userChoice) => {
    const computerChoice = getComputerChoice();
    userDisplay.textContent = `User: ${userChoice}`;
    computerDisplay.textContent = `CPU: ${computerChoice}`;
    winnerText.textContent = determineWinner(userChoice, computerChoice);
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});
