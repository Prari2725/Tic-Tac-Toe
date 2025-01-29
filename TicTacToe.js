const squares = document.querySelectorAll('.square');
const winnerMessage = document.getElementById('winner-message');
const restartButton = document.getElementById('restart-button');
let currentPlayer = 'X';
let boardState = ["", "", "", "", "", "", "", "", ""]; // Track game state
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

squares.forEach((square, index) => {
    square.addEventListener('click', () => handleClick(index));
});

function handleClick(index) {
    if (boardState[index] !== "" || !gameActive) return; // Prevent overwriting or continuing after a win

    boardState[index] = currentPlayer;
    squares[index].textContent = currentPlayer;

    if (checkWinner()) {
        winnerMessage.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    if (!boardState.includes("")) {
        winnerMessage.textContent = "It's a Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
}

function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => boardState[index] === currentPlayer);
    });
}

restartButton.addEventListener('click', () => {
    boardState = ["", "", "", "", "", "", "", "", ""];
    squares.forEach(square => square.textContent = "");
    winnerMessage.textContent = "";
    gameActive = true;
    currentPlayer = 'X';
});
