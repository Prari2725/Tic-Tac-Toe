const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

squares.forEach(square => {
    square.addEventListener('click', handleClick);
});

function handleClick(event) {
    const square = event.target;
    square.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

